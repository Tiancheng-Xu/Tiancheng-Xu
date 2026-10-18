import { readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");

function assertExperience(text) {
  assert.match(text, /Full-stack engineer with 8 years of software development and FDE delivery experience/);
  assert.match(text, /拥有 8 年软件开发与 FDE 交付经验/);
  assert.match(text, /主控本人负责的需求、方案与上线迭代/);
  assert.match(text, /当前增强版本、运行环境与公开证据分别说明/);
  assert.match(text, /不可变数据、函数组合与高阶函数/);
  assert.match(text, /ELF、Section \/ Segment、\.text \/ \.data \/ \.bss/);
  assert.match(text, /Global Offset Table/);
  assert.match(text, /Procedure Linkage Table/);
  assert.match(text, /library interposition \/ function wrapping/);
}

function assertPartTimeExperience(text) {
  const aladdin = text.match(/### 2025\.06–2026\.10 · 北京阿拉丁科技（兼职）([\s\S]*?)\n### 2023–2026/);
  assert.ok(aladdin, "Aladdin experience section is present");
  assert.match(aladdin[1], /全栈工程师（AI Agent \/ Web3）/);
  assert.match(aladdin[1], /任职高级前端并承担全栈交付职责/);
  assert.match(aladdin[1], /主控本人负责的 AI Agent \/ Web3 产品需求、方案和交付/);
  assert.match(aladdin[1], /Agent Market 与 BabySteps 归入该兼职经历，具体模块与协作分别说明/);
  assert.match(aladdin[1], /执行状态和结果聚合/);
  assert.match(aladdin[1], /异步任务、并发控制和状态流转/);
}

function assertAgentMarket(text) {
  const agentMarket = text.match(/^\| Agent Market \|([^\n]+)$/m);
  assert.ok(agentMarket, "Agent Market project row is present");
  assert.match(agentMarket[1], /任务交付的 Agent 协作平台/);
  assert.match(agentMarket[1], /计划、匹配、版本批准与质量复核/);
  assert.match(agentMarket[1], /企业权限和 System-One 增强按代码 \/ 设计分层/);
  assert.match(agentMarket[1], /https:\/\/agent-market\.baby2b\.online\//);
  assert.match(agentMarket[1], /https:\/\/github\.com\/Tiancheng-Xu\/agent-market/);
  assert.match(agentMarket[1], /https:\/\/agent-market\.baby2b\.online\/evidence\//);
}

function assertPersonalAgent(text) {
  const personalAgent = text.match(/^\| Personal AI Agent \|([^\n]+)$/m);
  assert.ok(personalAgent, "Personal AI Agent project row is present");
  assert.match(personalAgent[1], /私有资料的可溯源问答：混合检索、引用与取消/);
  assert.match(personalAgent[1], /模型训练、本机交付和检索评测分账/);
  assert.match(personalAgent[1], /业务工具按方案说明/);
  assert.match(personalAgent[1], /https:\/\/personal-ai-agent\.baby2b\.online\/evidence\//);
}

function assertPortfolioSync(text) {
  const sync = text.match(/^\| Portfolio Sync \|([^\n]+)$/m);
  assert.ok(sync, "Portfolio Sync project row is present");
  assert.match(sync[1], /仅补人工审核项目的更新时间，不覆盖状态、叙事或证据链接/);
  assert.match(sync[1], /增强已实现只读 OpenAPI 契约、按需读取、分页与 ETag \/ 304 \/ HEAD（尚未部署）/);
  assert.match(sync[1], /https:\/\/portfolio-sync\.baby2b\.online\//);
  assert.match(sync[1], /https:\/\/baby2b\.online\/evidence\/portfolio-sync/);
  assert.doesNotMatch(sync[1], /。；/);
}

test("resume preserves the approved eight-year full-stack and FDE scope", () => {
  assertExperience(readme);
});

test("Aladdin preserves the real role, part-time ownership and delivery responsibilities", () => {
  assertPartTimeExperience(readme);
});

// Detailed experiment metrics belong in project Evidence; Profile stays concise.
test("Agent Market retains its product scope, enhancement boundary and evidence", () => {
  assertAgentMarket(readme);
});

test("Personal AI Agent separates training, retrieval evaluation and planned tools", () => {
  assertPersonalAgent(readme);
});

test("Portfolio Sync keeps audited fields and undeployed HTTP enhancements separate", () => {
  assertPortfolioSync(readme);
});

test("narrative guards reject inflated experience, ownership and delivery claims", () => {
  assert.throws(() => assertExperience(readme.replace("8 years", "9 years")), assert.AssertionError);
  assert.throws(() => assertPartTimeExperience(readme.replace("Agent Market 与 BabySteps 归入该兼职经历", "Agent Market 与 BabySteps 是两份独立任职")), assert.AssertionError);
  assert.throws(() => assertAgentMarket(readme.replace("企业权限和 System-One 增强按代码 / 设计分层", "企业权限和 System-One 增强均已生产验证")), assert.AssertionError);
  assert.throws(() => assertPersonalAgent(readme.replace("模型训练、本机交付和检索评测分账", "训练 F1 等于检索准确率")), assert.AssertionError);
  assert.throws(() => assertPortfolioSync(readme.replace("HEAD（尚未部署）", "HEAD（已部署）")), assert.AssertionError);
});

test("open-source contribution totals and merged/open sections match the verified fact pack", () => {
  const merged = readme.match(/### Merged\n([\s\S]*?)\n### Open pull requests/);
  const open = readme.match(/### Open pull requests\n([\s\S]*?)\n> Open PRs are listed/);
  assert.ok(merged, "Merged pull request section is present");
  assert.ok(open, "Open pull request section is present");

  const pullRequestRows = (section) => section
    .split("\n")
    .filter((line) => /^\| [^|]+ \| \[[^\]]+\]\(https:\/\/github\.com\/[^/]+\/[^/]+\/pull\/\d+\)/.test(line));

  assert.equal(pullRequestRows(merged[1]).length, 7);
  assert.equal(pullRequestRows(open[1]).length, 18);
  assert.match(merged[1], /Crosstalk-Solutions\/project-nomad\/pull\/1358/);
  assert.doesNotMatch(open[1], /Crosstalk-Solutions\/project-nomad\/pull\/1358/);
  assert.match(readme, /\*\*7 merged \+ 18 open pull requests\*\*[^\n]*2026-09-26/);
});


test("public profile uses engineering language without classroom or study framing", () => { assert.doesNotMatch(readme, /课堂|主动学习|学习手记|课程来源|学习工具/); assert.match(readme, /技术研究与工程实践/); });
