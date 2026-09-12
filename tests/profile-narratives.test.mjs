import { readFileSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");

test("Agent Market keeps its official name, Aladdin subtitle, and public links", () => {
  assert.match(readme, /\| Agent Market \| \*\*Aladdin · AI Agent 交易与任务分发平台。\*\*/);
  assert.match(readme, /https:\/\/agent-market\.baby2b\.online\//);
  assert.match(readme, /https:\/\/github\.com\/Tiancheng-Xu\/agent-market/);
  assert.match(readme, /https:\/\/agent-market\.baby2b\.online\/evidence\//);
});

test("Personal AI Agent keeps its official name, customer-service subtitle, and public link", () => {
  assert.match(readme, /\| Personal AI Agent \| \*\*AI 智能客服与私有化模型交付。\*\*/);
  assert.match(readme, /已完成 Qwen3-8B/);
  assert.match(readme, /以系统设计覆盖意图识别/);
  assert.match(readme, /https:\/\/personal-ai-agent\.baby2b\.online\/evidence\//);
});
