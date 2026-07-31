import DraggableNotes from "@/components/DraggableNotes";

const projects = [
  {
    id: "01",
    tag: "CROSS-CULTURAL STORYTELLING",
    title: "Translate a campus, not just its words.",
    cn: "嘉泉大学中韩双语招生宣传项目",
    intro: "把一所韩国大学，讲成中文读者愿意继续听下去的故事。",
    why: "我对“同一件事在不同文化里为什么会被不同地理解”一直很好奇。这个项目给了我一次真正站在两种语境之间的机会。",
    role: "我负责将韩文校园介绍翻译并本土化为中文，也和韩国伙伴一起设计双语发表、现场讲解和问答。",
    result: "完成约 3,000+ 份内容的翻译与润色；团队获得三等奖，我也第一次把语言能力变成了可以被看见的沟通成果。",
    skill: "Cultural translation · Content localization · Presentation",
    tone: "blue",
  },
  {
    id: "02",
    tag: "RESEARCH × BEAUTY",
    title: "Find the person behind the spreadsheet.",
    cn: "AMOREPACIFIC 海外消费者洞察",
    intro: "从一份调研问卷里，找到不同年龄消费者真正关心的东西。",
    why: "我想知道数据是否也能讲人的故事。比起停留在“消费者喜欢什么”，我更关心偏好背后的生活阶段与心理。",
    role: "我清洗海外门店调研问卷、校验数据逻辑，并用 Excel 数据透视表比较 20—30、30—40 与 40 岁以上消费者的抗老成分偏好。",
    result: "剔除约 150+ 份无效样本，形成可用于产品线定位的年龄层洞察；同时为中、东南亚、北美市场整理了 200+ 份知识资料。",
    skill: "Data cleaning · Consumer insight · Structured thinking",
    tone: "pink",
  },
  {
    id: "03",
    tag: "0 → 1 CROSS-BORDER",
    title: "Turn a trend into something people can buy.",
    cn: "AHA 跨境时尚内容与运营",
    intro: "把韩国正在发生的潮流，转化成中国平台上的选品、内容与交易。",
    why: "追星和时尚让我对趋势天然敏感，而我不想只做一个旁观者。我想亲手验证：一个文化信号怎样经过判断、谈判和执行，真正进入另一个市场。",
    role: "从选品、韩方供应商沟通、汇率与物流判断，到小红书和淘宝上架、关键词优化、售前售后，我参与了完整链路。",
    result: "推动跨境店铺从 0 到 1；建立了对 YouTube、X 与韩国本土 KOL 的持续趋势追踪，也把“喜欢新东西”变成了可执行的商业判断。",
    skill: "Trend sensing · E-commerce · Negotiation · Ownership",
    tone: "acid",
  },
  {
    id: "04",
    tag: "COMMUNITY SYSTEMS",
    title: "Make a foreign campus feel less foreign.",
    cn: "庆熙大学国际学生沟通与学院支持",
    intro: "在制度、教授与留学生之间，把复杂信息变成安心的下一步。",
    why: "我知道身处陌生文化时，一个及时、清楚的回答有多重要。我希望行政支持不只是完成流程，也能让人感到自己被认真对待。",
    role: "服务 60+ 名外国留学生，负责中韩信息转译、课程与签证咨询、活动策划，并参与 200+ 人学术研讨会的组织支持。",
    result: "处理 30+ 件学生问题，反馈满意度达 95%；同时把迎新、文化节和学业提醒做成了更顺畅的沟通体验。",
    skill: "Service design · Coordination · Multilingual communication",
    tone: "paper",
  },
];

const experiences = [
  {
    date: "2025.06 — 2026.03",
    place: "KOREA · CROSS-BORDER FASHION",
    company: "AHA INTERNATIONAL",
    role: "Live Commerce & Operations / 直播运营",
    text: "从选品到履约，我第一次完整参与一门跨境生意的成长。追踪韩流趋势、与供应商谈判，也在汇率、物流和内容之间不断做现实的选择。",
    highlight: "从 0 到 1 推动店铺运营，并形成完整的中韩跨境供应链视角。",
  },
  {
    date: "2025.03 — 2025.06",
    place: "SEOUL · EDUCATION",
    company: "KYUNG HEE UNIVERSITY",
    role: "College Assistant / 政经学院助教",
    text: "我站在教授、学院和外国留学生之间，把通知翻译清楚，把问题推进下去，也参与文化节和大型研讨会的组织。",
    highlight: "连接 60+ 名留学生；处理 30+ 件咨询，满意度 95%。",
  },
  {
    date: "2024.06 — 2024.09",
    place: "SEOUL · BEAUTY",
    company: "AMOREPACIFIC",
    role: "Overseas Strategic Marketing Intern / 海外战略营销实习生",
    text: "在全韩语办公环境里，我从问卷和知识库切入海外市场：既处理表格中的异常值，也努力听懂会议里真正重要的那句话。",
    highlight: "清洗 150+ 份无效样本；整理 200+ 份跨地区、跨品牌资料。",
  },
  {
    date: "2020.09 — 2022.03",
    place: "JINZHOU · CAMPUS",
    company: "STUDENT UNION",
    role: "President / 学生会主席",
    text: "这是我最早的“产品经理训练”：理解需求、调动资源、应对变化，再让几十个人朝同一个目标行动。",
    highlight: "带领 6 个部门、40+ 名学生干部；年均组织 10+ 场活动，覆盖 2,000+ 人。",
  },
];

const notes = [
  {
    date: "NOTE 001 · 4 MIN",
    title: "Translation is product thinking.",
    cn: "翻译，其实很像产品思维",
    text: "都需要先放下“我想表达什么”，转而理解“对方在什么语境里接收”。好的翻译和好的产品，都不是把信息塞给用户，而是为理解设计路径。",
  },
  {
    date: "NOTE 002 · 3 MIN",
    title: "K-pop is also a trend laboratory.",
    cn: "追星也是我的趋势实验室",
    text: "舞台、造型、社群语言与传播节奏，构成了一套高速迭代的文化产品。喜欢它让我快乐，研究它则训练我捕捉审美变化与年轻消费心理。",
  },
  {
    date: "NOTE 003 · 2 MIN",
    title: "Stay curious. Then make it useful.",
    cn: "保持好奇，然后让它有用",
    text: "我会因为 AI 新工具熬夜试功能，也会为了一个小想法反复折腾。新鲜感不是终点，我最享受的是把“这很有意思”继续推到“它真的解决了问题”。",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="回到首页">YUYING<span>.ZIP</span></a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#notes">Notes</a>
          <a href="#life">Life</a>
          <a className="navCta" href="#contact">Say hi ↗</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroMeta">
          <span>PERSONAL CYBER SPACE</span>
          <span>SEOUL ↔ CHINA</span>
          <span>UPDATED 07.2026</span>
        </div>
        <div className="heroCopy">
          <p className="kicker">HELLO, I&apos;M YUYING <i>●</i></p>
          <h1>Between<br /><em>cultures</em><br />& possibilities.</h1>
          <p className="heroIntro">
            我在不同文化、城市与人之间，寻找值得被连接的东西。
            对 <strong>AI、产品、韩流趋势和新鲜事物</strong> 永远多问一句：还能怎么玩？
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">ENTER MY WORLD <span>↓</span></a>
            <a className="textLink" href="mailto:yuyingkorea@163.com">WORK WITH ME ↗</a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="windowBar"><span>yuying_portrait.jpg</span><span>— □ ×</span></div>
          <img src="/photos/hero-yuying.webp" alt="于滢在首尔街头的生活照" fetchPriority="high" />
          <span className="sticker stickerOne">CURIOUS<br />BY DEFAULT</span>
          <span className="sticker stickerTwo">THIS IS<br />YUYING :)</span>
          <span className="sticker stickerThree">✦</span>
        </div>
        <div className="ticker" aria-label="我的关键词">
          <div>AI ✦ PRODUCT ✦ KOREAN CULTURE ✦ FASHION ✦ PEOPLE ✦ TRAVEL ✦ MAKE THINGS HAPPEN ✦&nbsp;</div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="sectionTop">
          <p className="sectionLabel">01 / ABOUT ME</p>
          <span className="fileTag">OPEN: WHO_AM_I.TXT</span>
        </div>
        <div className="aboutGrid">
          <div className="aboutTitle">
            <p>I&apos;m curious<br />on purpose.</p>
            <h2>我对世界的兴趣，<br />从来不只停留在“看看”。</h2>
          </div>
          <div className="aboutCopy">
            <p className="english">
              I&apos;m Yuying — a cross-cultural communicator, trend observer, and enthusiastic
              tinkerer currently based in Korea. I&apos;m drawn to anything that makes the world
              feel newly possible: an AI tool, a clever product, a K-pop comeback, or a tiny
              cultural detail most people walk past.
            </p>
            <p>
              你好，我是于滢。一个好奇心很重、看到新东西就想亲手试试的人。AI 新工具、产品逻辑、
              韩流时尚、语言和不同文化里的细节，都很容易让我进入“再研究一下”的状态。
            </p>
            <p>
              我学过韩国语文学，也在读行政学；做过营销、跨境运营、翻译、数据分析和学生服务。
              这些看似不相邻的经历，慢慢拼出了我最喜欢的工作方式：先理解人，再整理复杂信息，
              最后把一个模糊的想法推到真正发生。
            </p>
            <p>
              我相信好奇心不是漫无目的地追新，而是一种持续发现可能性的能力。喜欢折腾也不是不安分，
              而是总愿意多走一步，问一句“有没有更好的做法”。我希望创造有用的东西，
              也希望它们有一点温度、一点审美，最好还能让人眼前一亮。
            </p>
          </div>
        </div>
        <div className="traitBoard">
          <span># AI EXPLORER</span><span># PRODUCT MINDSET</span><span># K-POP & FASHION</span>
          <span># 한국어</span><span># ALWAYS CURIOUS</span><span># 爱折腾</span>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="sectionTop light">
          <p className="sectionLabel">02 / SELECTED PROJECTS</p>
          <span className="fileTag">4 CASE FILES</span>
        </div>
        <div className="projectsIntro">
          <h2>Things I made happen.</h2>
          <p>我做过的，不只是任务。<br />它们是我理解问题、连接信息并推动结果的方式。</p>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className={`projectCard ${project.tone}`} key={project.id}>
              <div className="projectTop">
                <span>{project.id}</span><span>{project.tag}</span>
              </div>
              <h3>{project.title}</h3>
              <h4>{project.cn}</h4>
              <p className="projectIntro">{project.intro}</p>
              <div className="projectDetails">
                <div><b>WHY / 为什么做</b><p>{project.why}</p></div>
                <div><b>MY PART / 我做了什么</b><p>{project.role}</p></div>
                <div><b>OUTCOME / 做出了什么</b><p>{project.result}</p></div>
              </div>
              <p className="skillLine">{project.skill}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="sectionTop">
          <p className="sectionLabel">03 / EXPERIENCE</p>
          <span className="fileTag">VIEW: TIMELINE.MODE</span>
        </div>
        <div className="experienceHead">
          <h2>From one world<br />to another.</h2>
          <p>每段经历都让我换一个角度理解人、市场与组织。<br />它们没有把我定型，反而让我越来越擅长进入新环境。</p>
        </div>
        <div className="timeline">
          {experiences.map((item, index) => (
            <article key={item.company}>
              <div className="timelineIndex">{String(index + 1).padStart(2, "0")}</div>
              <div className="timelineDate"><b>{item.date}</b><span>{item.place}</span></div>
              <div className="timelineMain">
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <p>{item.text}</p>
                <strong>{item.highlight}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className="educationStrip">
          <span>EDUCATION.LOG</span>
          <p><b>KYUNG HEE UNIVERSITY</b> · MPA 行政学硕士 · 2024—2026</p>
          <p><b>GACHON UNIVERSITY</b> · 韩国语文学学士 · 2022—2024</p>
        </div>
      </section>

      <section className="notes section" id="notes">
        <div className="sectionTop">
          <p className="sectionLabel">04 / NOTES</p>
          <span className="fileTag">RECENTLY THINKING ABOUT...</span>
        </div>
        <div className="notesHead">
          <h2>Things I notice.</h2>
          <p>一些关于文化、产品、趋势和创造力的短想法。<br />它们仍在生长，也欢迎被讨论。</p>
        </div>
        <DraggableNotes notes={notes} />
      </section>

      <section className="life section" id="life">
        <div className="sectionTop light">
          <p className="sectionLabel">05 / OFFLINE MODE</p>
          <span className="fileTag">PHOTO DUMP · 3 ITEMS</span>
        </div>
        <div className="lifeHead">
          <h2>Outside the tabs,<br />I&apos;m still exploring.</h2>
          <p>登山、徒步、旅行、摄影和 K-pop。<br />我喜欢用身体进入一座城市，也喜欢用镜头保存它。</p>
        </div>
        <div className="photoCollage">
          <a className="photo photoTravel" href="/photos/singapore.webp" target="_blank" rel="noreferrer">
            <img src="/photos/singapore.webp" alt="于滢在新加坡鱼尾狮公园旅行" loading="lazy" />
            <span><b>01 / CITY WALK</b> Singapore · 热带天气和一场说走就走</span>
          </a>
          <a className="photo photoHike" href="/photos/hiking-seoul.webp" target="_blank" rel="noreferrer">
            <img src="/photos/hiking-seoul.webp" alt="于滢在首尔登山徒步" loading="lazy" />
            <span><b>02 / HIKING</b> Seoul · 山路让我把脑子里的标签页关掉</span>
          </a>
          <a className="photo photoFashion" href="/photos/tokyo-city.webp" target="_blank" rel="noreferrer">
            <img src="/photos/tokyo-city.webp" alt="于滢在城市高处的时尚造型摄影" loading="lazy" />
            <span><b>03 / STYLE FILE</b> Tokyo · 城市、造型和追星训练出的审美雷达</span>
          </a>
          <a
            className="musicCard"
            href="https://c6.y.qq.com/base/fcgi-bin/u?__=9sROiVJ8HGzv"
            target="_blank"
            rel="noreferrer"
            aria-label="在 QQ 音乐收听 RESCENE 的 Pretty Girl"
          >
            <span>NOW PLAYING · QQ MUSIC</span>
            <div className="musicPlay" aria-hidden="true">▶</div>
            <div className="musicDisc" aria-hidden="true"><i /></div>
            <p><b>PRETTY GIRL</b><br /><em>RESCENE · 리센느</em></p>
            <small>OPEN TO LISTEN ↗</small>
          </a>
          <p className="lifeScribble">collect moments,<br />not just milestones ✦</p>
        </div>
      </section>

      <footer id="contact">
        <div className="footerStatus"><span>06 / CONTACT</span><span>STATUS: OPEN TO POSSIBILITIES ●</span></div>
        <p className="footerHello">Have an idea,<br />a role, or just<br /><em>something curious?</em></p>
        <p className="footerCn">如果你正在寻找一个能理解文化差异、捕捉趋势，也愿意把细节做实的人，我们应该聊聊。</p>
        <a href="mailto:yuyingkorea@163.com">yuyingkorea@163.com <span>↗</span></a>
        <div className="contactChips">
          <span>中文</span><span>한국어</span><span>ENGLISH</span><span>BASED IN KOREA</span>
        </div>
        <div className="footerBottom">
          <p>© 2026 YUYING.ZIP</p>
          <a href="#top">BACK TO TOP ↑</a>
          <p>MADE WITH CURIOSITY</p>
        </div>
      </footer>
    </main>
  );
}
