# Hi, I'm Tiancheng Xu

Full-stack engineer with experience in government low-code and FDE delivery. I build front-office and middle-platform applications, AI Agent and Web3 products, and evidence-backed engineering workflows.

全栈工程师。2023–2026 年参与政企低代码与 FDE 项目，负责前台应用与中台能力的架构实现；当前专注 AI Agent、Web3、Cloud / Edge 与可验证工程交付。

## Professional experience

### 2023–2026 · Government low-code / FDE engineering · Ningbo

- 驻场服务宁波市公安局科信、特警等相关业务部门，参与低代码与 FDE 项目建设。
- 负责前台业务应用与中台能力的架构实现，以及相关模块的工程交付和持续迭代。
- 关注模块边界、系统集成、可维护性与交付质量，用可验证结果而不是技术名词描述工作。

> 政企项目仅公开职责与能力范围，不公开内部系统名称、数据、接口、部署拓扑或安全架构。

## 2026 part-time project work · Beijing

只收录个人仓库中已有实际实现的项目；空仓库、模板仓库和仅有规划的项目不列入经历。

| Project | What I built | Evidence |
| --- | --- | --- |
| Agent Market | **Aladdin · AI Agent 交易与任务分发平台。** 面向 Agent 众包交易，构建任务自动拆解、候选过滤与评分、人工或自动选定、多阶段分发和暂停恢复；以 LangGraph DAG、多运行时服务、PostgreSQL Checkpoint、异步队列、信誉评分与 LLM 质量评测支撑复杂任务协作。 | [Live](https://agent-market.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/agent-market) · [Evidence](https://agent-market.baby2b.online/evidence/) |
| BabySteps | 完成成长任务、家长中心、纪念馆、Provider 与链上交互等产品模块，并建立 Edge SSR、水合降级和真实性能观测链路；难点是隔离身份、钱包和服务端渲染边界。 | [Live](https://babysteps.baby2b.online/) · [Repository](https://github.com/Tiancheng-Xu/babysteps) · [Evidence](https://babysteps.baby2b.online/evidence/) |

## Personal engineering portfolio system

以下项目用于展示个人工程能力，不作为兼职或客户项目经历：

| Project | What it demonstrates | Links |
| --- | --- | --- |
| Personal AI Agent | **AI 智能客服与私有化模型交付。** 已完成 Qwen3-8B、LlamaFactory、QLoRA / NF4、GGUF 与 Ollama 的领域微调和离线运行；以系统设计覆盖意图识别、Qwen Embedding、知识图谱 / RAG、Tool Calling、多轮问答和低置信度转人工。 | [Evidence](https://personal-ai-agent.baby2b.online/evidence/) |
| GitHub Profile Studio | 构建本地优先的 GitHub 公开资料工作台，以统一 API 契约验证 Hono / Node 与 Go 双后端，并通过服务端白名单和 macOS 钥匙串隔离浏览器凭据。 | [Repository](https://github.com/Tiancheng-Xu/github-profile-studio) · [Evidence](https://baby2b.online/evidence/github-profile-studio) |
| Showcase Dashboard | 把项目状态、Evidence、Portfolio Sync、性能观测与受保护控制入口整合为个人工程作品系统；保持静态首屏、水合后数据和项目自有链接一致，并让未知路由返回真实 404。 | [Repository](https://github.com/Tiancheng-Xu/fullstack-showcase) · [Live](https://baby2b.online/dashboard/) · [Evidence](https://baby2b.online/evidence/fullstack-showcase) |
| Portfolio Sync | 以 GitHub App Webhook、HMAC 验签与 Cloudflare Worker/KV 汇总真实项目发布清单，并用定时任务补齐事件遗漏；难点是同步状态、静态首屏与项目自有 Evidence 的一致性。 | [Live](https://portfolio-sync.baby2b.online/) · [Evidence](https://baby2b.online/evidence/portfolio-sync) |
| 性能观测与成本控制 | 将浏览器真实性能样本、临时 AWS 聚合链路、成本控制与零残留清理纳入同一受保护控制面；难点是同时守住样本可信度、最小权限和预算边界。 | [Control](https://baby2b.online/performance-control/babysteps) · [Evidence](https://baby2b.online/evidence/performance-observability-control) |
| TC Flow 2.1 | 把需求、实现、审查、修复和发布拆成可恢复的 N1-N8 流程，沉淀本地与远端 Gate；难点是让复杂任务在失败、续跑和多人协作时仍保持可审查状态。 | [Repository](https://github.com/Tiancheng-Xu/personal-skills/tree/main/skills/tc-flow) · [Evidence](https://baby2b.online/evidence/tc-workflow) |

> 部分项目源码为私有仓库。公开页面只展示获准公开的产品与证据，不暴露凭据、私有数据集或模型权重。

## Open-source contributions

当前可核验的 OSS 共建：**7 merged + 20 open pull requests**（更新于 2026-09-10）。

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

### Open pull requests

| Project | Pull request | Contribution |
| --- | --- | --- |
| VS Code | [#335428](https://github.com/microsoft/vscode/pull/335428) | Use mouse event modifiers for editor drag-and-drop state |
| Deno | [#36794](https://github.com/denoland/deno/pull/36794) | Preserve the `--` separator before CLI entrypoints |
| MCP Servers | [#4775](https://github.com/modelcontextprotocol/servers/pull/4775) | Emit object input schemas for the filesystem server |
| RTK | [#3933](https://github.com/rtk-ai/rtk/pull/3933) | Match Ruff format routing to the first argument |
| RTK | [#3922](https://github.com/rtk-ai/rtk/pull/3922) | Add a compact `gitleaks` TOML filter for secret-scan output |
| LiteLLM | [#40183](https://github.com/BerriAI/litellm/pull/40183) | Add source-backed OpenRouter metadata for `gpt-5.6-sol` |
| Chrome DevTools MCP | [#2686](https://github.com/ChromeDevTools/chrome-devtools-mcp/pull/2686) | Cover scheduled script navigation without fixed sleeps |
| GoogleTest | [#5092](https://github.com/google/googletest/pull/5092) | Avoid shadowing a parameter in `INSTANTIATE_TEST_SUITE_P` |
| GoogleTest | [#5091](https://github.com/google/googletest/pull/5091) | Preserve forced ANSI color output when CTest captures stdout on Windows |
| Backstage | [#35564](https://github.com/backstage/backstage/pull/35564) | Resolve an `undici` security advisory |
| Context Mode | [#1128](https://github.com/mksglu/context-mode/pull/1128) | Fix bounded curl/wget pipeline and multiline routing |
| Tabler Icons | [#1590](https://github.com/tabler/tabler-icons/pull/1590) | Preserve the SolidJS JSX source export for Vite SSR |
| Portless | [#413](https://github.com/vercel-labs/portless/pull/413) | Preserve routes when self-daemonized commands exit |
| Quicklink | [#501](https://github.com/GoogleChromeLabs/quicklink/pull/501) | Give generated site pages unique descriptions |
| Bitcoin Dev Kit | [#2276](https://github.com/bitcoindevkit/bdk/pull/2276) | Preserve the first floating `TxOut` and consistent `ChangeSet` semantics |
| Google WebCrypto | [#398](https://github.com/google/webcrypto.dart/pull/398) | Extract the RSA-OAEP PKCS#8 import example |
| Web Testownik | [#323](https://github.com/Solvro/web-testownik/pull/323) | Harden maintenance recovery handling |
| BBj Language Server | [#665](https://github.com/BBx-Kitchen/bbj-language-server/pull/665) | Unify language-server logger output |
| Slopshop | [#21](https://github.com/fireship-dev/slopshop/pull/21) | Harden per-user rate limiting |
| Paperclip | [#2](https://github.com/adamteale/paperclip/pull/2) | Cover run-job invocation scope resolution |

> Open PRs are listed as work under upstream review; only merged PRs are presented as completed upstream contributions.
