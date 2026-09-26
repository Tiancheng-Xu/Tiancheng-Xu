import { readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");

test("resume presents the approved eight-year full-stack profile and systems knowledge", () => {
  assert.match(readme, /Full-stack engineer with 8 years of software development experience/);
  assert.match(readme, /拥有 8 年软件开发经验的全栈工程师/);
  assert.match(readme, /不可变数据、函数组合与高阶函数/);
  assert.match(readme, /ELF、Section \/ Segment、\.text \/ \.data \/ \.bss/);
  assert.match(readme, /Global Offset Table/);
  assert.match(readme, /Procedure Linkage Table/);
  assert.match(readme, /library interposition \/ function wrapping/);
});

test("Aladdin experience describes full-stack product work without a frontend role label", () => {
  const aladdin = readme.match(/### 2026 · 北京阿拉丁科技（兼职）([\s\S]*?)\n### 2023–2026/);
  assert.ok(aladdin, "Aladdin experience section is present");
  assert.match(aladdin[1], /全栈工程师（AI Agent \/ Web3）/);
  assert.doesNotMatch(aladdin[1], /前端|React|Vite|Next\.js/);
  assert.match(aladdin[1], /异步执行、状态聚合/);
});

test("Agent Market includes bounded Jev and Laya shadow integration and current evidence", () => {
  const agentMarket = readme.match(/^\| Agent Market \|([^\n]+)$/m);
  assert.ok(agentMarket, "Agent Market project row is present");
  assert.match(agentMarket[1], /AI Agent 交易与任务分发平台/);
  assert.match(agentMarket[1], /Jev \+ Laya 双影子扩展/);
  assert.match(agentMarket[1], /calibrated: false/);
  assert.match(agentMarket[1], /203 passed \/ 8 skipped/);
  assert.match(agentMarket[1], /离线模型冷启动和冻结标注评估待验/);
  assert.match(agentMarket[1], /https:\/\/agent-market\.baby2b\.online\//);
  assert.match(agentMarket[1], /https:\/\/github\.com\/Tiancheng-Xu\/agent-market/);
  assert.match(agentMarket[1], /https:\/\/agent-market\.baby2b\.online\/evidence\//);
});

test("Personal AI Agent uses the verified implementation and evaluation evidence", () => {
  const personalAgent = readme.match(/^\| Personal AI Agent \|([^\n]+)$/m);
  assert.ok(personalAgent, "Personal AI Agent project row is present");
  assert.match(personalAgent[1], /AI 智能客服与私有化模型交付/);
  assert.match(personalAgent[1], /Qwen3-8B/);
  assert.match(personalAgent[1], /NF4 QLoRA/);
  assert.match(personalAgent[1], /49 条冻结集评测/);
  assert.match(personalAgent[1], /v2 bigram F1 为 0\.2146，v3 为 0\.2129/);
  assert.match(personalAgent[1], /https:\/\/personal-ai-agent\.baby2b\.online\/evidence\//);
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
  assert.equal(pullRequestRows(open[1]).length, 15);
  assert.match(merged[1], /Crosstalk-Solutions\/project-nomad\/pull\/1358/);
  assert.doesNotMatch(open[1], /Crosstalk-Solutions\/project-nomad\/pull\/1358/);
  assert.match(readme, /\*\*7 merged \+ 15 open pull requests\*\*[^\n]*2026-09-26/);
});
