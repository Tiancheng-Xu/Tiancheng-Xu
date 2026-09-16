# Hi, I'm Tiancheng Xu

Full-stack engineer with experience in government low-code and FDE delivery. I build front-office and middle-platform applications, AI Agent and Web3 products, and evidence-backed engineering workflows.

全栈工程师。2023–2026 年参与政企低代码与 FDE 项目，负责前台应用与中台能力的架构实现；当前专注 AI Agent、Web3、Cloud / Edge 与可验证工程交付。

## Professional experience

### 2020–2023 · Traffic dashboard FDE engineering · Ningbo

- 驻场宁波市交警局，参与交警大屏 FDE 项目建设。
- 负责前台展示应用与中台能力的工程实现、现场交付和持续迭代。

### 2023–2026 · Government low-code / FDE engineering · Ningbo

- 驻场服务宁波市公安局科信、特警等相关业务部门，参与低代码与 FDE 项目建设。
- 负责前台业务应用与中台能力的架构实现，以及相关模块的工程交付和持续迭代。
- 关注模块边界、系统集成、可维护性与交付质量，用可验证结果而不是技术名词描述工作。

> 政企项目仅公开职责与能力范围，不公开内部系统名称、数据、接口、部署拓扑或安全架构。

## 2026 part-time project work · Beijing

只收录个人仓库中已有实际实现的项目；空仓库、模板仓库和仅有规划的项目不列入经历。

| Project | What I built | Evidence |
| --- | --- | --- |
| Agent Market | **Aladdin · AI Agent 交易与任务分发平台。** Queen 将需求拆成 DAG，候选 Agent 经标签硬过滤、向量相关度与信誉评分排序后由人工或系统选定；Agent 分阶段生产，Judge 进行规则与 LLM 多维评测，不合格结果进入 Repair，最终由 Final Arbiter 汇总交付。Node / Hono、Python / LangGraph 与 Go 执行器协作，以 PostgreSQL Checkpoint、队列 / DLQ、幂等和版本冲突保护支撑暂停恢复。 | [Live](https://agent-market.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/agent-market) · [Evidence](https://agent-market.baby2b.online/evidence/) |
| Aladdin Web3 Agent | 参与 AI Agent 分布式任务调度与 Web3 交付平台的 Web 端和全栈协作。覆盖 Job 编辑发布、语义分类与任务拆解、Agent 自动匹配与派单、异步反馈、结果聚合、合约托管结算，以及将用户创意拆解为剧本、角色 / 场景 / 道具、分镜、视频片段与最终合成的 AI 内容生产链路。 | [Portfolio](https://baby2b.online/dashboard/) |
| BabySteps | **家庭成长产品与渐进式 Web3 应用。** 覆盖成长任务、家长中心、纪念馆、Provider 与链上交互；Cloudflare Edge SSR 先返回安全摘要壳，再按 marker、路径和版本门禁精确水合身份、钱包与性能 SDK。水合不一致时执行一次性纯 CSR fallback，重点解决浏览器专属依赖、服务端渲染和身份边界之间的冲突。 | [Live](https://babysteps.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/babysteps) · [Evidence](https://babysteps.baby2b.online/evidence/) |

## Personal engineering portfolio system

以下项目用于展示个人工程能力，不作为兼职或客户项目经历：

| Project | What it demonstrates | Links |
| --- | --- | --- |
| Personal AI Agent | **AI 智能客服与私有化模型交付。** 面向售前咨询、售后处理和技术问答，使用 LlamaFactory 对 Qwen3-8B 做 NF4 QLoRA 领域微调，完成 Adapter 合并、GGUF 量化与 Ollama 私有化运行；以 BERT / 规则完成意图路由，经 Qwen Embedding、知识图谱 / RAG 检索后生成回答，Tool Calling 连接价格、退换与业务规则，多轮上下文配合低置信度、敏感问题和无答案场景转人工。 | [Evidence](https://personal-ai-agent.baby2b.online/evidence/) |
| GitHub Profile Studio | **本地优先的 GitHub 公开资料工作台。** React / TanStack 前端共享统一 API 契约，可切换 Hono / Node 或 Go 后端，SQLite / Drizzle 负责草稿与幂等写入；访问令牌只留在服务端和 macOS 钥匙串，浏览器只编辑白名单字段，解决双运行时契约一致性与凭据隔离问题。 | [Repository](https://github.com/Tiancheng-Xu/github-profile-studio) · [Evidence](https://baby2b.online/evidence/github-profile-studio) |
| Showcase Dashboard | **静态优先的个人工程作品系统。** 人工审核索引定义项目身份与核心叙事，GitHub App / Cloudflare Worker 动态补充发布清单；SSG 首屏、水合数据、按需 Babylon / Archify、项目深链、旧域名重定向和真实 404 共同解决性能、内容一致性与重型交互边界。 | [Repository](https://github.com/Tiancheng-Xu/fullstack-showcase) · [Live](https://baby2b.online/dashboard/) · [Evidence](https://baby2b.online/evidence/fullstack-showcase) |
| Portfolio Sync | **GitHub App 驱动的作品集同步系统。** 仅收录声明 Baby2B 发布清单和 Evidence 地址的仓库；Webhook 经 HMAC 验签后即时更新，短期只读 Installation Token 拉取内容，Cloudflare Worker / KV 聚合结果，30 分钟定时刷新补齐事件遗漏，主站保留人工审核静态回退。 | [Live](https://portfolio-sync.baby2b.online/) · [Evidence](https://baby2b.online/evidence/portfolio-sync) |
| 性能观测与成本控制 | **短生命周期性能观测与成本控制面。** 浏览器采集 Core Web Vitals 与资源耗时，受保护入口通过固定工作流启停聚合链路，并用 nonce、幂等键、HMAC 回调和不可变快照约束执行；停止后封入口、清理项目资源并保留历史结果。AWS 当前停用，恢复工作保留为 TODO。 | [Control](https://baby2b.online/performance-control/babysteps) · [Evidence](https://baby2b.online/evidence/performance-observability-control) |
| TC Flow 2.1 | **可恢复的 Feature 交付工作流。** Contract / Context 明确范围与验收，N1-N8 串联实现、审查、P0 / PII / Fallback / Human Gate 和 Feature QA；Checkpoint、事件流与 RunResult 持久化过程状态，使长任务在失败、续跑和多人协作时仍能回到正确节点。 | [Repository](https://github.com/Tiancheng-Xu/personal-skills/tree/main/skills/tc-flow) · [Evidence](https://baby2b.online/evidence/tc-workflow) |

> 部分项目源码为私有仓库。公开页面只展示获准公开的产品与证据，不暴露凭据、私有数据集或模型权重。

## Open-source contributions

当前可核验的 OSS 共建：**9 merged + 18 open pull requests**（更新于 2026-09-16）。

### Merged

| Project | Pull request | Contribution |
| --- | --- | --- |
| Vite | [#23235](https://github.com/vitejs/vite/pull/23235) | Explain server-only module reload behavior in SSR |
| pnpm | [#14674](https://github.com/pnpm/pnpm/pull/14674) | List pnpm v12 in the security support policy |
| PR-Agent | [#3142](https://github.com/The-PR-Agent/pr-agent/pull/3142) | Hide disabled commands from user-facing help output |
| PR-Agent | [#3141](https://github.com/The-PR-Agent/pr-agent/pull/3141) | Honor GitLab `/ask_line` old-side positions |
| PR-Agent | [#3140](https://github.com/The-PR-Agent/pr-agent/pull/3140) | Remove dead shared rate-limit handlers |
| ClawBox | [#774](https://github.com/ID-Robots/clawbox/pull/774) | Correct model-catalog fallback behavior |
| PySNMP MIBs | [#361](https://github.com/pysnmp/mibs/pull/361) | Correct the TCPIPX unspecified table row type |
| Web Testownik | [#323](https://github.com/Solvro/web-testownik/pull/323) | Harden maintenance recovery handling |
| BBj Language Server | [#665](https://github.com/BBx-Kitchen/bbj-language-server/pull/665) | Unify language-server logger output |

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
| Chrome DevTools MCP | [#2686](https://github.com/ChromeDevTools/chrome-devtools-mcp/pull/2686) | Cover scheduled script navigation without fixed sleeps |
| Context Mode | [#1128](https://github.com/mksglu/context-mode/pull/1128) | Fix bounded curl/wget pipeline and multiline routing |
| Tabler Icons | [#1590](https://github.com/tabler/tabler-icons/pull/1590) | Preserve the SolidJS JSX source export for Vite SSR |
| Portless | [#413](https://github.com/vercel-labs/portless/pull/413) | Preserve routes when self-daemonized commands exit |
| Google WebCrypto | [#398](https://github.com/google/webcrypto.dart/pull/398) | Extract the RSA-OAEP PKCS#8 import example |
| Paperclip | [#2](https://github.com/adamteale/paperclip/pull/2) | Cover run-job invocation scope resolution |

> Open PRs are listed as work under upstream review; only merged PRs are presented as completed upstream contributions.
