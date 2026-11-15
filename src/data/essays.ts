export type Locale = 'en' | 'zh';

export interface Essay {
  slug: string;
  topic: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  readTime: Record<Locale, string>;
  sections: Array<{
    heading: Record<Locale, string>;
    paragraphs: Record<Locale, string[]>;
  }>;
}

// Original editorial drafts prepared for Peter DAI Chuang, not prior publications.
export const essays: Essay[] = [
  {
    slug: 'ai-meets-the-real-world',
    topic: { en: 'Practice', zh: '实践' },
    title: {
      en: 'Where AI meets the real world',
      zh: '当 AI 走进真实世界',
    },
    excerpt: {
      en: 'The value of industrial AI becomes visible in changed work: clearer decisions, fewer loose ends, and responsibility that stays with people.',
      zh: '工业 AI 的价值，要在工作的实际变化中看见：判断更清楚，交接少遗漏，责任始终有人承担。',
    },
    readTime: { en: '3 min read', zh: '3 分钟阅读' },
    sections: [
      {
        heading: { en: 'Start with the work', zh: '从工作本身出发' },
        paragraphs: {
          en: [
            'A factory does not become more capable because a model can describe what is happening inside it. Capability appears when someone can make a better decision, complete a difficult task, or notice a problem early enough to act. That sounds modest beside the language often used around AI. Yet it gives us a useful place to begin: the work itself, including the awkward details that rarely fit on a presentation slide.',
            'Consider a maintenance recommendation. Producing a plausible explanation is one step. The real task includes checking the equipment history, understanding the production schedule, finding the right person, and deciding whether an interruption is justified. Each handoff can introduce delay or uncertainty. Before choosing a model, I would ask where that process breaks down today, who carries the burden, and what a genuinely better working day would look like for them.',
          ],
          zh: [
            '一个模型能够描述工厂里正在发生什么，并不意味着工厂的能力已经提高。只有当人们能作出更好的判断、完成原本困难的任务，或及时发现问题并采取行动，能力才真正体现出来。与围绕 AI 的宏大叙述相比，这样的期待显得朴素，却给了我们一个可靠的起点：回到工作本身，也看见那些很难放进演示文稿的棘手细节。',
            '以一条设备维护建议为例，生成一段看似合理的解释，只是其中一步。完整的任务还包括核对设备历史、理解生产安排、找到合适的负责人，以及判断是否值得为此中断生产。每一次交接都可能带来等待或不确定性。在选择模型之前，我更愿意先问：现有流程究竟卡在哪里？谁在承担这些麻烦？对他们而言，真正更好的一天应该是什么样？',
          ],
        },
      },
      {
        heading: { en: 'Keep responsibility visible', zh: '让责任清晰可见' },
        paragraphs: {
          en: [
            'When AI enters that process, responsibility needs to become clearer. A recommendation should have a destination, supporting evidence, and a person with the authority to accept or reject it. If nobody knows who acts next, an impressive answer can simply become another item waiting in a queue. The workflow matters as much as the answer because it connects information to a decision, and that decision to consequences someone must own.',
            'This also means designing for ordinary imperfections. Records will be incomplete. Equipment will behave differently from its documentation. People will disagree, sometimes for good reasons. A useful system makes those limits visible and gives people a practical way to question its output, correct an input, or return to an established procedure. Asking a busy colleague to verify everything without providing time or evidence merely moves the difficulty to another desk.',
          ],
          zh: [
            'AI 进入流程之后，责任需要更加清楚。一条建议应该交给谁，有什么证据支持，谁有权接受或否决，都应明确。如果没有人知道下一步由谁行动，再精彩的答案也可能只是待办队列里的又一项。流程与答案同样重要，因为流程把信息连接到决策，也把决策连接到必须有人承担的后果。',
            '这也意味着，我们必须为日常的不完美做好设计。记录可能缺失，设备的实际表现可能与文档不同，人们也会有分歧，而且有时各有道理。有用的系统会让这些局限显现出来，让使用者能够质疑输出、修正输入，或回到已有的操作程序。如果只是要求忙碌的同事核验一切，却不给他们时间和证据，那不过是把难题转交给了另一张办公桌。',
          ],
        },
      },
      {
        heading: { en: 'Look for a better working day', zh: '看工作是否真的变好了' },
        paragraphs: {
          en: [
            'The evidence of value should therefore come from the work before and after the change. Are decisions better informed? Are avoidable checks disappearing, or have they been hidden downstream? Do people spend less time searching and more time resolving the issue? We should listen particularly carefully to those who inherit the output. A tool that saves one team effort while creating confusion for the next has an unfinished claim to value.',
            'I am interested in AI that earns a quiet place in daily operations. People understand when to use it, when to challenge it, and how to continue without it. Improvement becomes something they can describe in their own words. That is a demanding standard, but a useful one. It keeps ambition connected to reality, and it makes room for the patient, collaborative work through which a promising technology becomes dependable practice.',
          ],
          zh: [
            '因此，价值的证据应该来自工作改变前后的对照。决策是否有了更充分的依据？不必要的检查是否真的减少，还是被悄悄转移到了下游？人们是否少花时间寻找信息，多花时间解决问题？尤其值得认真听取的，是接收这些输出的人。如果一个工具替前一个团队省了力，却让后一个团队更困惑，它的价值就还没有得到完整证明。',
            '我关注的 AI，是能够在日常运营中踏实发挥作用的 AI。人们知道什么时候该用它，什么时候该提出质疑，也知道没有它时如何继续工作。他们能够用自己的话说清楚，工作究竟改善了什么。这个标准并不低，但很有用：它让雄心始终与现实相连，也让耐心和协作得到应有的位置。正是这些工作，让一项有潜力的技术成为可靠的日常实践。',
          ],
        },
      },
    ],
  },
  {
    slug: 'capability-over-demonstration',
    topic: { en: 'Leadership', zh: '领导力' },
    title: {
      en: 'Capability, not just a demonstration',
      zh: '让能力经得起演示之外的考验',
    },
    excerpt: {
      en: 'A good demonstration opens a conversation. Dependable capability requires evaluation, clear limits, and people who retain meaningful control.',
      zh: '好的演示让讨论开始。可靠的能力，还需要持续评估、清楚的边界，以及人们真正握得住的控制权。',
    },
    readTime: { en: '3 min read', zh: '3 分钟阅读' },
    sections: [
      {
        heading: { en: 'Ask what the demonstration leaves out', zh: '问问演示没有呈现什么' },
        paragraphs: {
          en: [
            'A good demonstration has a legitimate purpose. It helps people see a possibility that words alone cannot convey. The trouble begins when we ask it to serve as evidence for everyday reliability. A carefully chosen example tells us that something can work. It leaves open the harder question of what happens when the inputs are unfamiliar, incomplete, or contradictory.',
            'Leadership starts with keeping those two questions separate. Before expanding use, define the task, the conditions in which the system is expected to operate, and the mistakes that would matter most. An inaccurate draft and an unsafe operating recommendation deserve different treatment. Evaluation should reflect the consequences of the work, including the effort required to detect and repair a failure.',
          ],
          zh: [
            '好的演示有其应有的价值。它能让人看见仅靠语言难以传达的可能性。问题出现在我们开始用它证明日常运行的可靠性时。一个精心挑选的案例，说明某件事可以做成；但当输入变得陌生、残缺，甚至相互矛盾时会发生什么，仍然有待回答。',
            '领导者首先要把这两个问题分开。在扩大使用范围之前，先明确任务是什么，系统预期在什么条件下运行，以及哪些错误最值得警惕。一份不准确的草稿与一条不安全的操作建议，需要不同的处理方式。评估必须对应工作的实际后果，也要算上发现错误、修复错误所需的精力。',
          ],
        },
      },
      {
        heading: { en: 'Let trust have boundaries', zh: '让信任有明确的边界' },
        paragraphs: {
          en: [
            'Trust grows through exposure to ordinary cases and difficult ones, with the results open to scrutiny. People need to know where a system performs well, where its evidence is weak, and where it should decline to proceed. A single overall score can obscure exactly the failures that deserve attention. Keep representative examples close to the discussion, especially the uncomfortable ones.',
            'That understanding cannot be frozen at launch. Documents change, working conditions shift, and updates can alter behavior in unexpected ways. Someone needs to own the ongoing evaluation, hear from users, and decide when to narrow or pause use. Trust is easier to sustain when acknowledging a limit is treated as responsible management rather than an embarrassment to be explained away.',
          ],
          zh: [
            '信任来自对普通案例和困难案例的持续检验，检验结果也应允许人们审视。使用者需要知道，系统在哪些地方表现可靠，哪些地方证据薄弱，以及何时应该停止并交还处理权。一个综合分数可能恰好掩盖最值得关注的失败。讨论时应始终保留有代表性的具体案例，尤其是那些令人不太舒服的案例。',
            '这种理解不能在上线时就此定格。文档会变化，工作条件会改变，更新也可能带来意想不到的行为变化。持续评估需要明确的负责人，由其听取使用者反馈，判断何时应缩小或暂停使用范围。当承认局限被视为负责任的管理，而非需要掩饰的难堪，信任才更容易维持。',
          ],
        },
      },
      {
        heading: { en: 'Make human control practical', zh: '让人的控制权落到实处' },
        paragraphs: {
          en: [
            'Human control must be possible in practice. A person approving an output needs enough context, time, and authority to disagree. They also need a way to stop an action before its consequences become difficult to reverse. An approval button offers little protection if the surrounding process rewards speed and quietly discourages questions. The organization helps determine whether oversight is real.',
            'My preferred test is simple: can the people responsible explain why this system is appropriate for this task, recognize when it has reached its limits, and act on that recognition? If they can, there is a foundation for broader use. If they cannot, another polished demonstration will not close the gap. The next investment belongs in evidence and control.',
          ],
          zh: [
            '人的控制权必须在实际工作中行使得了。批准一项输出的人，需要足够的背景信息、时间，以及提出异议的权限。他们还需要有办法在后果难以挽回之前叫停行动。如果周围的流程一味奖励速度，又在无形中压制提问，一个批准按钮提供的保护就很有限。监督是否真实有效，也取决于组织如何运转。',
            '我更愿意用一个简单的问题来检验：负责的人能否解释，为什么这个系统适合这项任务；能否识别它何时触及边界；又能否据此采取行动？如果可以，扩大使用就有了基础。如果做不到，再精致的演示也填不上这个缺口。下一步应该投入的，是证据和控制机制。',
          ],
        },
      },
    ],
  },
  {
    slug: 'global-by-design',
    topic: { en: 'Perspective', zh: '视角' },
    title: {
      en: 'Global by design. Human at heart.',
      zh: '以全球视野设计，以人的需要为本。',
    },
    excerpt: {
      en: 'Working across borders asks us to share what should be common while giving local knowledge the power to shape what people actually use.',
      zh: '跨地域开展工作，既要明确哪些原则值得共同坚守，也要让当地的知识真正影响产品与服务。',
    },
    readTime: { en: '3 min read', zh: '3 分钟阅读' },
    sections: [
      {
        heading: { en: 'Translation is a beginning', zh: '翻译只是起点' },
        paragraphs: {
          en: [
            'A product can speak several languages and still understand very little about the people using it. Words travel more easily than assumptions. A service designed around one working week, one family pattern, or one expectation of privacy may feel unfamiliar somewhere else, even when every sentence is translated correctly. Global work begins by noticing those assumptions before they become requirements.',
            'Language itself carries more than vocabulary. A warning must be understood under pressure. A repair instruction needs terms a technician actually uses. A customer asking for help may switch between languages within a sentence. These are ordinary circumstances, not unusual exceptions. Designing for them requires listening to people in context, rather than treating translation as the last task before release.',
          ],
          zh: [
            '一款产品可以支持多种语言，却仍然对使用它的人知之甚少。文字比文字背后的假设更容易跨越边界。一项服务如果围绕某一种工作节奏、家庭模式或隐私预期设计，即使每句话都翻译准确，到了另一个地方仍可能让人感到不适应。全球化工作的起点，是在这些假设被写成需求之前，先识别它们。',
            '语言承载的也远不止词汇。警示信息需要让人在紧张时刻迅速理解，维修说明需要采用技术人员真正使用的术语，寻求帮助的客户也可能在一句话里切换语言。这些都是日常情况，不应被当作罕见例外。为这些情况做好设计，需要在真实情境中倾听人们的表达，而不能把翻译留作发布前的最后一道工序。',
          ],
        },
      },
      {
        heading: { en: 'Share principles, leave room for judgment', zh: '共享原则，为当地判断留出空间' },
        paragraphs: {
          en: [
            'Some commitments should travel intact: safety, respect for personal information, honest communication, and clear responsibility when something goes wrong. Shared foundations can make these commitments easier to uphold. But consistency in principle does not require identical procedures everywhere. Local regulations, infrastructure, service networks, and habits may call for different choices about how a product is delivered and supported.',
            'Local teams therefore need more than permission to adjust the wording. They need a voice in priorities, access to the reasoning behind decisions, and authority over choices that depend on local knowledge. Headquarters also needs the willingness to learn in the other direction. An improvement discovered in one market may expose an assumption that deserves reconsideration everywhere.',
          ],
          zh: [
            '有些承诺跨越地域也应保持完整：保障安全、尊重个人信息、诚实沟通，以及出问题时责任明确。共同的基础可以帮助我们更好地兑现这些承诺。但原则一致，并不要求每个地方都采用相同的流程。当地法规、基础设施、服务网络和使用习惯，都可能要求我们以不同的方式交付产品、提供支持。',
            '因此，当地团队需要的，远不止修改措辞的许可。他们应当能够参与确定优先事项，了解决策背后的理由，并对依赖当地知识的选择拥有相应权限。总部也需要愿意反过来学习。某个市场发现的一项改进，可能揭示出一个值得在所有市场重新审视的假设。',
          ],
        },
      },
      {
        heading: { en: 'Keep a person in view', zh: '始终看见具体的人' },
        paragraphs: {
          en: [
            'AI makes this discipline more important. Fluent output can conceal a misunderstanding of local meaning, and the most widely represented languages can receive the most careful testing by default. We should ask whose examples shaped the evaluation and whose difficulties remain unseen. Local reviewers need the opportunity to challenge both the answer and the question the system was designed to solve.',
            'For me, a global perspective stays useful only while it keeps a person in view: someone trying to understand an instruction, make a choice, or get help without unnecessary friction. Reaching more places is an ambition. Making sense in those places is a responsibility. The quality of the work depends on how seriously we take both, especially when local feedback asks us to change our original plan.',
          ],
          zh: [
            'AI 让这份工作更为重要。流畅的输出可能掩盖对当地语义的误解，而使用更广泛、资料更丰富的语言，也更容易得到充分测试。我们应当追问：评估采用了谁的案例？还有谁遇到的困难没有被看见？当地评审者需要有机会质疑答案，也有机会质疑系统最初被要求解决的问题。',
            '对我而言，全球视野只有始终看见具体的人，才真正有用。这个人可能正在读懂一条说明、作出一个选择，或试图顺利获得帮助。走进更多地方，是一份雄心；让产品和服务在那里切实合用，是一份责任。工作的质量，取决于我们对两者有多认真，尤其是当来自当地的反馈要求我们改变原有计划时。',
          ],
        },
      },
    ],
  },
];
