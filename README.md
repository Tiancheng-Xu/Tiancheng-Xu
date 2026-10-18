# Hi, I'm Tiancheng Xu

Full-stack engineer with 8 years of software development and FDE delivery experience. I lead requirements, architecture trade-offs, delivery, and iteration for AI Agent, full-stack, and engineering-tool products, distinguishing released products from ongoing enhancements.

拥有 8 年软件开发与 FDE 交付经验，主控本人负责的需求、方案与上线迭代；聚焦 AI Agent、全栈与工程工具产品，将业务规则、运行边界和可验证交付连成闭环。

实际产品已上线或完成本机交付；当前增强版本、运行环境与公开证据分别说明。

持续参与开源共建，围绕源码排障、兼容性修复与工程维护贡献改进，并与上游维护者协作迭代。

## Core strengths

- 从业务问题出发，主控本人负责的需求澄清、方案取舍、模块交付与验收迭代；政府项目聚焦平台复用、接口集成与现场交付。
- 将模型判断与确定性规则分层，以 Checkpoint、幂等、人工审批、Evidence 和结构化评测约束高风险 Agent 任务。
- 按资产权限、事实基线、可观测性、回滚演练与 SLO / Runbook 分阶段接管复杂系统；外部副作用未知时进入 `uncertain / manual_review` 对账，模型服务不可用时切换备用 Provider、本地 Ollama 或人工兜底。
- 熟悉 TypeScript、JavaScript、React、Vue，具备 Python、Node.js、FastAPI、PostgreSQL、WebSocket 与 AWS Serverless 开发实践。
- 熟悉函数式编程中的纯函数、不可变数据、函数组合与高阶函数，并将其用于状态建模和复杂流程拆解；具备计算机系统基础，理解从编译、链接、装载到运行的程序生命周期，了解 DLL（Dynamic Linking Library）动态链接库、ELF、Section / Segment、.text / .data / .bss、符号重定位，以及 GOT（Global Offset Table）、PLT（Procedure Linkage Table）与库打桩（library interposition / function wrapping）等机制。
- 技术研究与工程实践：围绕计算机系统、AI 与前端工程梳理技术选型、架构取舍和运行边界，以实现与交付记录支撑方案判断；跟踪 WebMCP、Agentic Web 与 MCP 等技术及标准演进，关注网页工具化、Agent 互操作与权限边界。在 Portfolio Sync 增强中实现按需读取与条件请求，版本发布状态与对应证据分别说明。→ [技术分享](https://baby2b.online/sharing/)

## Professional experience

### 2025.06–2026.10 · 北京阿拉丁科技（兼职）

**全栈工程师（AI Agent / Web3）**

任职高级前端并承担全栈交付职责，主控本人负责的 AI Agent / Web3 产品需求、方案和交付。Agent Market 与 BabySteps 归入该兼职经历，具体模块与协作分别说明。

- 参与任务发布与编辑、语义分类、子任务拆解、Agent 匹配派发、执行状态和结果聚合等端到端流程。
- 协同 PostgreSQL / pgvector、GraphQL、Webhook / SSE、消息队列及 AWS 完成系统联调，推进异步任务、并发控制和状态流转。
- 参与 MetaMask 签名、智能合约托管 / 结算、IPFS / 链上结果证据及 AI 内容生产工作流的接口与端到端联调。

### 2023–2026 · Government low-code / FDE engineering · Ningbo

- 驻场服务宁波市公安局科信、特警等相关业务部门，主控本人负责的低零代码 / FDE 应用交付，将需求拆成输入、规则、输出和验收，权衡平台复用与定制，推进系统集成与上线迭代。
- 与市局、分局科信部门及派出所保持业务沟通，协调需求变更、联调验收与持续迭代。
- 在连续交付中由页面实现拓展至前中台协作、模块边界设计和问题闭环，对系统鲁棒性、可维护性与交付质量形成更全面、深入的理解。

### 2020–2023 · Traffic dashboard FDE engineering · Ningbo

- 驻场宁波市交警局，主控本人负责的交警大屏应用与中台模块交付，从业务口径、数据接口推进至可视化联动与现场验收。
- 负责可视化展示应用与中台能力的工程实现，围绕模块复用、数据呈现、交互状态联动和页面性能开展开发与联调。
- 结合现场业务反馈定位问题、推进需求落地与验收交付，并持续改进大屏运行的稳定性和可维护性。

## 2025.06–2026.10 part-time project work · Beijing

按本人主控的实际产品与具体职责整理；已上线产品和当前增强版本分列，外部参考、模板与题面不计为独立产品。

| Project | What I built | Evidence |
| --- | --- | --- |
| Agent Market | 任务交付的 Agent 协作平台：计划、匹配、版本批准与质量复核；企业权限和 System-One 增强按代码 / 设计分层。 | [Live](https://agent-market.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/agent-market) · [Evidence](https://agent-market.baby2b.online/evidence/) |
| Aladdin Web3 Agent | **主控本人负责的应用与接口交付。** 覆盖任务发布、拆解与派发、异步反馈和结果聚合，联调合约托管结算与 AI 内容生产；具体本人模块与平台协作分开说明。 | [Portfolio](https://baby2b.online/dashboard/) |
| BabySteps | 访客优先的家庭成长产品：亲子任务、成长积分与进阶链上体验；钱包、业务授权和交易事实分开核对。 | [Live](https://babysteps.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/babysteps) · [Evidence](https://babysteps.baby2b.online/evidence/) |

## Personal engineering portfolio system

以下为本人主控的个人产品与工程工具，分别说明公网发布、本机交付与当前增强，不重复计入兼职或客户经历：

| Project | What it demonstrates | Links |
| --- | --- | --- |
| Personal AI Agent | 私有资料的可溯源问答：混合检索、引用与取消；模型训练、本机交付和检索评测分账，业务工具按方案说明。 | [Evidence](https://personal-ai-agent.baby2b.online/evidence/) |
| OfficeFlow 办公流程 Agent | 口语需求转可人核字段，批准后受控执行并独立核对；多源材料与通用文档解析核心属于扩展设计，未冒充 OCR 交付。 | [Live](https://office-workflow-agent.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/office-workflow-agent) · [Evidence](https://office-workflow-agent.baby2b.online/evidence/) |
| GitHub Profile Studio | 统一前端契约适配 Node / Go，白名单编辑幂等保存到本地 SQLite；凭据留服务端，公网托管另列规划。 | [Repository](https://github.com/Tiancheng-Xu/github-profile-studio) · [Evidence](https://baby2b.online/evidence/github-profile-studio) |
| Showcase Dashboard | 静态优先的作品与 Evidence 系统；人工审核定位，水合接管交互，公开摘要与私有事实源分离。 | [Repository](https://github.com/Tiancheng-Xu/fullstack-showcase) · [Live](https://baby2b.online/dashboard/) · [Evidence](https://baby2b.online/evidence/fullstack-showcase) |
| Portfolio Sync | 已完成 Showcase 事件同步：Webhook 验签、短期只读身份和定时对账，仅补人工审核项目的更新时间，不覆盖状态、叙事或证据链接；增强已实现只读 OpenAPI 契约、按需读取、分页与 ETag / 304 / HEAD（尚未部署）。 | [Live](https://portfolio-sync.baby2b.online/) · [Evidence](https://baby2b.online/evidence/portfolio-sync) |
| 性能观测与成本控制 | 按需采样、启停和历史快照分层；未知不填零，受控实验不冒充真实用户 SLO 或全账户零费用。 | [Control](https://baby2b.online/performance-control/babysteps) · [Evidence](https://baby2b.online/evidence/performance-observability-control) |
| TC Flow 2.1 | 契约、独立 Review、Checkpoint 与 QA 串起可恢复研发；配套 Shared Evidence Verifier 以 OIDC 和固定清单核对公开交付，不替代业务验收。 |[Repository](https://github.com/Tiancheng-Xu/personal-skills/tree/main/skills/tc-flow) · [Evidence](https://baby2b.online/evidence/tc-workflow) · [Verifier Evidence](https://baby2b.online/evidence/shared-evidence-verifier) |
| Hatch Pet | 角色基准到动作、方向、视觉审查和安装包的生成流程设计；公开规格不等于新增生成器已验收。 | [PRD](https://github.com/Tiancheng-Xu/hatch-pet/blob/main/PRD.md) · [Repository](https://github.com/Tiancheng-Xu/hatch-pet) |
| 售后 Agent 工作台 | 工单、版本提案、角色审批与动作账本组成可核对的售后流程；模型建议和当前整品增强按各自验收范围说明。 | [Evidence](https://baby2b.online/evidence/service-agent-workbench) |
| Hono GitHub 资料云服务 | 外部资料经白名单校验与幂等存储接入页面；Serverless、私网数据库和短期身份为云方案，真实云闭环另验。 | [Evidence](https://baby2b.online/evidence/hono-github-profile) |
| WeChat Intent HUD | 主动读取可见输入并给出表达候选，不代发送；取消隔离迟到结果，真实模型效果与 OCR 预览按增强方案说明。 | [Evidence](https://baby2b.online/evidence/wechat-intent-hud) |
| Codex Translate | 划词、本地翻译、语境缩写与带来源资料检索串成阅读工具；AI 深挖须主动触发，本机安装与权限验收分开。 | [Evidence](https://baby2b.online/evidence/codex-translate) |
| 知识整理与证据管线 | 来源、转录与复核分层；规划将短 PDF / 扫描图转为带原页区域的提取结果和质量报告，解析核心尚未实现。 | [Evidence](https://baby2b.online/evidence/knowledge-evidence-pipeline) |
| Codex Mascot / BaoBao Puff | 角色、动作、方向与透明图集结合格式及视觉审核；资产交付与生成服务分开，时段轮换及主题按接入范围说明。 | [Evidence](https://baby2b.online/evidence/codex-mascot) |

> 部分项目源码为私有仓库。公开页面只展示获准公开的产品与证据，不暴露凭据、私有数据集或模型权重。

## 商业探索

面向询价、礼盒核价、订单交期与产品资料交接的四项产品，独立于个人工程工具表。[查看 Dashboard 商业探索](https://baby2b.online/dashboard/#commercial-exploration)。

| 产品 | 业务实现与当前范围 | 公开入口 |
| --- | --- | --- |
| 外贸询价复核 | 紧固件询价三方复核、版本人审与安全恢复；复用 BidLint 与解析库。恢复验收 64 项，云承载待验。 | [Evidence](https://baby2b.online/evidence/commercial-rfq-review) |
| 礼盒变更复核 | MOQ、阶梯价与余量成本核对，保留版本和采购审批；复用 RuleEngine。固定 CSV 导入 51 项分批检查通过，Web 上传与真实身份待验。 | [Evidence](https://baby2b.online/evidence/commercial-gift-review) |
| 订单交期变更核对 | 订单行映射、日期规则与幂等对账；复用 LangGraph。已上线固定合成资料只读交期核对，客户上传关闭，不代替真实 ERP 写入验收。 | [产品入口](https://orderguard.baby2b.online/) · [Evidence](https://baby2b.online/evidence/commercial-orderguard) |
| 制造企业产品资料与素材交接 | 事实 / SKU 约束、审核依赖与哈希交接；复用 MIT 成片函数和媒体工具。76 项离线检查，真实 Frappe 运行待验。 | [Evidence](https://baby2b.online/evidence/commercial-ai-export) |

真实客户效果与付款待验证；测试批次、上游复用与实际运行范围详见各项目 Evidence。

## Open-source contributions

当前公开列表覆盖 17 个 GitHub stars 至少 1,000 的上游仓库：**7 merged + 18 open pull requests**（共 25 项；原有仓库星数快照截至 2026-09-26，本次新增 / 更新仓库于 2026-10-01 复核）。低于门槛的历史贡献保留在内部记录，不列入此公开列表。

### Merged

| Project | Pull request | Contribution |
| --- | --- | --- |
| Vite | [#23235](https://github.com/vitejs/vite/pull/23235) | Explain server-only module reload behavior in SSR |
| pnpm | [#14674](https://github.com/pnpm/pnpm/pull/14674) | List pnpm v12 in the security support policy |
| Tabler Icons | [#1590](https://github.com/tabler/tabler-icons/pull/1590) | Preserve the SolidJS JSX source export for Vite SSR |
| Project NOMAD | [#1358](https://github.com/Crosstalk-Solutions/project-nomad/pull/1358) | Merged to `dev`: fix Night Ops WCAG contrast across base, hover, 80% hover, and group-hover foreground variants without regressing white text on green buttons |
| PR-Agent | [#3142](https://github.com/The-PR-Agent/pr-agent/pull/3142) | Hide disabled commands from user-facing help output |
| PR-Agent | [#3141](https://github.com/The-PR-Agent/pr-agent/pull/3141) | Honor GitLab `/ask_line` old-side positions |
| PR-Agent | [#3140](https://github.com/The-PR-Agent/pr-agent/pull/3140) | Remove dead shared rate-limit handlers |

### Open pull requests

| Project | Pull request | Contribution |
| --- | --- | --- |
| Deno | [#36855](https://github.com/denoland/deno/pull/36855) | Preserve stdio file descriptors for sync child processes |
| Deno | [#36851](https://github.com/denoland/deno/pull/36851) | Avoid Rust backtraces for test failures |
| Deno | [#36849](https://github.com/denoland/deno/pull/36849) | Expose module format in `registerHooks` |
| Vite | [#23499](https://github.com/vitejs/vite/pull/23499) | Release previous environments after initialization |
| MCP Servers | [#4810](https://github.com/modelcontextprotocol/servers/pull/4810) | Scope session resources to their owning server |
| VS Code | [#335428](https://github.com/microsoft/vscode/pull/335428) | Support mouse modifiers for editor drag and drop |
| Quicklink | [#501](https://github.com/GoogleChromeLabs/quicklink/pull/501) | Give generated site pages unique descriptions |
| GoogleTest | [#5092](https://github.com/google/googletest/pull/5092) | Avoid shadowing parameters in `INSTANTIATE_TEST_SUITE_P` |
| GoogleTest | [#5091](https://github.com/google/googletest/pull/5091) | Preserve forced ANSI colors for captured Windows stdout |
| MCP Servers | [#4775](https://github.com/modelcontextprotocol/servers/pull/4775) | Emit object input schemas for the filesystem server |
| RTK | [#3933](https://github.com/rtk-ai/rtk/pull/3933) | Match Ruff format routing to the first argument |
| RTK | [#3922](https://github.com/rtk-ai/rtk/pull/3922) | Add a gitleaks TOML filter |
| wagmi | [#5250](https://github.com/wevm/wagmi/pull/5250) | Preserve connector compatibility and forward `dataSuffix` from the default client |
| Context Mode | [#1128](https://github.com/mksglu/context-mode/pull/1128) | Fix bounded curl/wget pipeline and multiline routing |
| Avante | [#3266](https://github.com/avante-corp/avante.nvim/pull/3266) | Draft: label ACP providers in the provider switch without changing regular labels or the provider API |
| cmux | [#15795](https://github.com/manaflow-ai/cmux/pull/15795) | Restore browser interaction state when reopening through the legacy fallback |
| OpenResearch | [#477](https://github.com/alphaXiv/OpenResearch/pull/477) | Draft: show experiment run duration, with a live timer for active runs |
| Portless | [#413](https://github.com/vercel-labs/portless/pull/413) | Original PR remains open; successor [#444](https://github.com/vercel-labs/portless/pull/444) by another author credits Tiancheng-Xu as co-author, including the self-daemon E2E fixture |

> Open PRs are listed as work under upstream review; draft status is marked explicitly. Only merged PRs are presented as completed upstream contributions.

### Active issue investigations

| Project | Issue | Current evidence |
| --- | --- | --- |
| Next.js | [#98732](https://github.com/vercel/next.js/issues/98732) | 已复现自定义缓存冷启动下动态路由返回 500；等待最小修复路径 |
| Next.js | [#98791](https://github.com/vercel/next.js/issues/98791) | 已有上游竞争实现 [#98798](https://github.com/vercel/next.js/pull/98798)；暂停并行修复，观察 review 结果 |
| Deno | [#36858](https://github.com/denoland/deno/issues/36858) | 已认领 UDP `reusePort` 缺失问题；准备核对 Linux socket 语义与跨平台行为 |
| Deno | [#36870](https://github.com/denoland/deno/issues/36870) | 已留言调查 Desktop HMR 对传递 npm 依赖的解析；尚无 PR |

> Issue investigations are not counted as pull requests until a verified PR is opened.
