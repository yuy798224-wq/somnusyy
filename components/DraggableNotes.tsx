"use client";

import { PointerEvent, useRef, useState } from "react";

type Note = {
  date: string;
  title: string;
  cn: string;
  text: string;
};

type Point = { x: number; y: number };

export default function DraggableNotes({ notes }: { notes: Note[] }) {
  const boardRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    index: number;
    pointerX: number;
    pointerY: number;
    start: Point;
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  } | null>(null);
  const [positions, setPositions] = useState<Point[]>(notes.map(() => ({ x: 0, y: 0 })));
  const [topNote, setTopNote] = useState(1);
  const [dragging, setDragging] = useState<number | null>(null);

  const startDrag = (event: PointerEvent<HTMLElement>, index: number) => {
    if (window.matchMedia("(max-width: 860px)").matches) return;
    if ((event.target as HTMLElement).closest("a")) return;

    const board = boardRef.current;
    if (!board) return;

    const cardRect = event.currentTarget.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();
    const start = positions[index];

    dragRef.current = {
      index,
      pointerX: event.clientX,
      pointerY: event.clientY,
      start,
      minX: start.x - (cardRect.left - boardRect.left),
      maxX: start.x + (boardRect.right - cardRect.right),
      minY: start.y - (cardRect.top - boardRect.top),
      maxY: start.y + (boardRect.bottom - cardRect.bottom),
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    setTopNote(index);
    setDragging(index);
  };

  const moveDrag = (event: PointerEvent<HTMLElement>) => {
    const drag = dragRef.current;
    if (!drag) return;
    const x = Math.min(drag.maxX, Math.max(drag.minX, drag.start.x + event.clientX - drag.pointerX));
    const y = Math.min(drag.maxY, Math.max(drag.minY, drag.start.y + event.clientY - drag.pointerY));
    setPositions((current) => current.map((point, index) => index === drag.index ? { x, y } : point));
  };

  const endDrag = (event: PointerEvent<HTMLElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
    setDragging(null);
  };

  return (
    <>
      <p className="dragHint"><span>↖</span> DRAG THE NOTES · 点击并拖动便签</p>
      <div className="notesGrid" ref={boardRef}>
        {notes.map((note, index) => (
          <article
            key={note.date}
            className={`note note${index + 1}${dragging === index ? " isDragging" : ""}`}
            style={{
              "--drag-x": `${positions[index].x}px`,
              "--drag-y": `${positions[index].y}px`,
              zIndex: topNote === index ? 10 : index + 1,
            } as React.CSSProperties}
            onPointerDown={(event) => startDrag(event, index)}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
          >
            <span>{note.date}</span>
            <h3>{note.title}</h3>
            <h4>{note.cn}</h4>
            <p>{note.text}</p>
            <a href={`mailto:yuyingkorea@163.com?subject=想聊聊：${encodeURIComponent(note.cn)}`}>TALK ABOUT THIS ↗</a>
          </article>
        ))}
      </div>
    </>
  );
}
