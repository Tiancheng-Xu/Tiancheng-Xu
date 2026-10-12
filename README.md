# Hi, I'm Tiancheng Xu

Full-stack engineer with 8 years of software development and FDE delivery experience. I lead requirements, architecture trade-offs, delivery, and iteration for AI Agent, full-stack, and engineering-tool products, distinguishing released products from ongoing enhancements.

拥有 8 年软件开发与 FDE 交付经验，主控本人负责的需求、方案与上线迭代；聚焦 AI Agent、全栈与工程工具产品，将业务规则、运行边界和可验证交付连成闭环。

实际产品已上线或完成本机交付；当前增强版本、运行环境与公开证据分别说明，不把局部待验概括为整个项目是 Demo。

持续参与开源共建，围绕源码排障、兼容性修复与工程维护贡献改进，并与上游维护者协作迭代。

## Core strengths

- 从业务问题出发，主控本人负责的需求澄清、方案取舍、模块交付与验收迭代；政府项目聚焦平台复用、接口集成与现场交付。
- 将模型判断与确定性规则分层，以 Checkpoint、幂等、人工审批、Evidence 和结构化评测约束高风险 Agent 任务。
- 按资产权限、事实基线、可观测性、回滚演练与 SLO / Runbook 分阶段接管复杂系统；外部副作用未知时进入 `uncertain / manual_review` 对账，模型服务不可用时切换备用 Provider、本地 Ollama 或人工兜底。
- 熟悉 TypeScript、JavaScript、React、Vue，具备 Python、Node.js、FastAPI、PostgreSQL、WebSocket 与 AWS Serverless 开发实践。
- 熟悉函数式编程中的纯函数、不可变数据、函数组合与高阶函数，并将其用于状态建模和复杂流程拆解；具备计算机系统基础，理解从编译、链接、装载到运行的程序生命周期，了解 DLL（Dynamic Linking Library）动态链接库、ELF、Section / Segment、.text / .data / .bss、符号重定位，以及 GOT（Global Offset Table）、PLT（Procedure Linkage Table）与库打桩（library interposition / function wrapping）等机制。
- 主动学习与知识沉淀：我围绕计算机系统、Python、AI 与前端工程持续学习，结合课程、技术文章和会议资料梳理知识之间的联系，记录自己的理解、疑问与待实践的问题，并在 Share 分享阶段思考。→ [学习手记](https://baby2b.online/sharing/#learning-journal)

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
| Agent Market | **主控、已上线的任务分发产品。** 组织规划、匹配、审批、执行与交付，分开模型判断、业务规则和工具权限；以 Checkpoint、动作账本和版本审批处理恢复及结果未知。V1 生产证据与当前多模型 / 双影子增强分列，后者未合并发布，离线冷启动与冻结标注评估仍待验。 | [Live](https://agent-market.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/agent-market) · [Evidence](https://agent-market.baby2b.online/evidence/) |
| Aladdin Web3 Agent | **主控本人负责的应用与接口交付。** 覆盖任务发布、拆解与派发、异步反馈和结果聚合，联调合约托管结算与 AI 内容生产；具体本人模块与平台协作分开说明。 | [Portfolio](https://baby2b.online/dashboard/) |
| BabySteps | **主控、已上线的家庭成长产品。** 连接成长任务、家长中心与链上交互，分开钱包状态、业务权限和交易事实；通过 Edge SSR、水合前提与受控 CSR 回退组织页面接管。Sepolia、历史发布与当前增强范围分别说明。 | [Live](https://babysteps.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/babysteps) · [Evidence](https://babysteps.baby2b.online/evidence/) |

## Personal engineering portfolio system

以下为本人主控的个人产品与工程工具，分别说明公网发布、本机交付与当前增强，不重复计入兼职或客户经历：

| Project | What it demonstrates | Links |
| --- | --- | --- |
| Personal AI Agent | **主控私有知识产品与本机模型交付。** 将事实检索与行为训练分开，以混合召回、RRF、重排和引用组织回答；Qwen3-8B 微调、量化与 Ollama 完成本机交付。49 条冻结集中 v2 bigram F1 0.2146 高于 v3 0.2129，因此保留 v2；该指标不等于 RAG 准确率。网站发布、当前检索增强与待补语义评测分列。 | [Evidence](https://personal-ai-agent.baby2b.online/evidence/) |
| OfficeFlow 办公流程 Agent | **主控、已上线的办公流程产品。** 可信字段 → 版本审批 → 执行 → 独立结果核对，设计 API / Browser 分工与未知结果恢复。当前生产记录为合成工作区、规则提案且模型关闭；OCR 增强待验，不声称真实采购业绩。 | [Live](https://office-workflow-agent.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/office-workflow-agent) · [Evidence](https://office-workflow-agent.baby2b.online/evidence/) |
| GitHub Profile Studio | **主控并交付本地优先的资料工作台。** 统一 API 契约适配 Hono / Node 与 Go，SQLite 幂等保存白名单字段，凭据隔离在服务端与 macOS 钥匙串。本地保存不等于更新 GitHub 账号或 Profile README；公网 API 托管版本尚未在当前材料中定位。 | [Repository](https://github.com/Tiancheng-Xu/github-profile-studio) · [Evidence](https://baby2b.online/evidence/github-profile-studio) |
| Showcase Dashboard | **主控、已上线的静态优先作品系统。** 人工审核项目身份与核心叙事，同步只补已有项目的更新时间；以 SSG、水合和按需 3D 管住内容一致性、首屏与重型交互边界。 | [Repository](https://github.com/Tiancheng-Xu/fullstack-showcase) · [Live](https://baby2b.online/dashboard/) · [Evidence](https://baby2b.online/evidence/fullstack-showcase) |
| Portfolio Sync | **GitHub App 驱动的作品集同步系统。** 仅收录声明 Baby2B 发布清单和 Evidence 地址的仓库；Webhook 经 HMAC 验签后即时更新，短期只读 Installation Token 拉取内容，Cloudflare Worker / KV 聚合结果，30 分钟定时刷新补齐事件遗漏，主站保留人工审核静态回退。 | [Live](https://portfolio-sync.baby2b.online/) · [Evidence](https://baby2b.online/evidence/portfolio-sync) |
| 性能观测与成本控制 | **短生命周期性能观测与成本控制面。** 浏览器采集 Core Web Vitals 与资源耗时，受保护入口通过固定工作流启停聚合链路，并用 nonce、幂等键、HMAC 回调和不可变快照约束执行；停止后封入口、清理项目资源并保留历史结果。AWS 当前停用，恢复工作保留为 TODO。 | [Control](https://baby2b.online/performance-control/babysteps) · [Evidence](https://baby2b.online/evidence/performance-observability-control) |
| TC Flow 2.1 | **可恢复的 Feature 交付工作流。** Contract / Context 明确范围与验收，N1-N8 串联实现、审查、P0 / PII / Fallback / Human Gate 和 Feature QA；Checkpoint、事件流与 RunResult 持久化过程状态，使长任务在失败、续跑和多人协作时仍能回到正确节点。 | [Repository](https://github.com/Tiancheng-Xu/personal-skills/tree/main/skills/tc-flow) · [Evidence](https://baby2b.online/evidence/tc-workflow) |

| Hatch Pet | **主控宠物产品的角色、格式和质量交付。** 产品级交付按本人确认；当前公开仓库仅提供脱敏规格，具体实现与对应交付入口尚需定位，不以公开旧树否定私有交付，也不补写未知生成器功能。 | [PRD](https://github.com/Tiancheng-Xu/hatch-pet/blob/main/PRD.md) · [Repository](https://github.com/Tiancheng-Xu/hatch-pet) |

> 部分项目源码为私有仓库。公开页面只展示获准公开的产品与证据，不暴露凭据、私有数据集或模型权重。

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
