# Claude Skills for Turnify B2B Return Portal

Custom Claude Skills designed specifically for the Turnify B2B Return Portal development workflow.

## 📚 Available Skills

### 1. **shopify-sync** - Sync Shopify Data
Triggers the FastAPI backend to pull customers, products, and orders from Shopify and store them in PostgreSQL.

**Use Cases:**
- "Sync all Shopify data"
- "Pull latest orders from Shopify"
- "Update product catalog"

**Quick Start:**
```bash
cd .claude/skills/shopify-sync
python scripts/sync.py --all
```

---

### 2. **api-test** - Test API Endpoints
Runs comprehensive tests against all FastAPI backend endpoints to verify functionality.

**Use Cases:**
- "Test the API"
- "Check if backend endpoints are working"
- "Run API tests"

**Quick Start:**
```bash
cd .claude/skills/api-test
python scripts/test_api.py
```

**Options:**
- `--health-only` - Test only health endpoints (fast)
- `--verbose` - Show detailed request/response info
- `--endpoint <name>` - Test specific endpoint only

---

### 3. **db-migrate** - Database Migrations
Creates and applies Alembic database migrations for the PostgreSQL schema.

**Use Cases:**
- "Create a database migration"
- "Apply database migrations"
- "Rollback last migration"

**Quick Start:**
```bash
cd .claude/skills/db-migrate

# Create migration
bash scripts/migrate.sh create "add new field to returns"

# Apply migrations
bash scripts/migrate.sh upgrade

# Show current version
bash scripts/migrate.sh current
```

---

### 4. **ui-ux** - UI/UX Design System & Code Help
Expertise for styling, accessibility, and UX so work matches the Turnify portal. No script—use when building or reviewing UI, forms, layouts, or design consistency.

**Use Cases:**
- "Style this to match the portal"
- "What colors/spacing should I use?"
- "Make this form accessible"
- "Redesign this page to match login/dashboard"

**Covers:** Color palette, typography, spacing, components (cards, buttons, inputs), accessibility, and reference components (login, dashboard, layout).

---

### 5. **create-component** - Generate React Components
Generates new React components following Turnify portal patterns and TypeScript conventions.

**Use Cases:**
- "Create a new React component"
- "Generate a modal component"
- "Create a dashboard widget"

**Quick Start:**
```bash
cd .claude/skills/create-component

# Create a page component
npx ts-node scripts/create_component.ts --name ReturnHistory

# Create a modal
npx ts-node scripts/create_component.ts --name ApprovalModal --type modal

# Create a widget
npx ts-node scripts/create_component.ts --name StatsWidget --type widget
```

**Component Types:**
- `page` - Full-page component with header/footer
- `modal` - Modal dialog component
- `widget` - Dashboard widget/card component
- `form` - Form component with validation

---

## 🚀 How to Use Skills

### Option 1: Via Claude Chat
Simply ask Claude to perform a task:
- "Sync Shopify data"
- "Test the API endpoints"
- "Create a new component called OrderHistory"
- "Create a migration for adding status field"

Claude will automatically invoke the appropriate skill.

### Option 2: Manual Execution
Navigate to the skill directory and run the script directly:

```bash
# Go to project root
cd /path/to/B2B_return_portal

# Run a skill
cd .claude/skills/shopify-sync
python scripts/sync.py --all
```

---

## 📁 Directory Structure

```
.claude/skills/
├── README.md (this file)
├── shopify-sync/
│   ├── SKILL.md
│   └── scripts/
│       └── sync.py
├── api-test/
│   ├── SKILL.md
│   └── scripts/
│       └── test_api.py
├── db-migrate/
│   ├── SKILL.md
│   └── scripts/
│       └── migrate.sh
├── ui-ux/
│   └── SKILL.md
└── create-component/
    ├── SKILL.md
    └── scripts/
        └── create_component.ts
```

---

## 🔧 Requirements

### Python Skills (shopify-sync, api-test)
- Python 3.11+
- requests library: `pip install requests`
- FastAPI backend running

### Bash Skills (db-migrate)
- Bash shell
- Alembic installed in backend
- PostgreSQL accessible

### TypeScript Skills (create-component)
- Node.js 18+
- TypeScript: `npm install -g typescript ts-node`
- Project uses TypeScript

---

## 🎯 Skill Development Guidelines

### Creating New Skills

1. **Create skill directory:**
   ```bash
   mkdir -p .claude/skills/my-skill/scripts
   ```

2. **Create SKILL.md:**
   ```markdown
   # Skill Name

   Description of what the skill does

   ## Use Cases
   - "Example use case 1"
   - "Example use case 2"

   ## Script
   Ref: scripts/my_script.py

   ## Examples
   \`\`\`bash
   python scripts/my_script.py
   \`\`\`
   ```

3. **Create executable script:**
   - Python: `scripts/my_script.py`
   - Bash: `scripts/my_script.sh`
   - TypeScript: `scripts/my_script.ts`

4. **Make executable:**
   ```bash
   chmod +x scripts/my_script.*
   ```

### Best Practices

- ✅ **Clear naming:** Use descriptive, action-oriented names
- ✅ **Documentation:** Include SKILL.md with examples
- ✅ **Error handling:** Provide helpful error messages
- ✅ **Validation:** Validate inputs before executing
- ✅ **Output:** Use colored output for better UX
- ✅ **Help text:** Support --help flag
- ✅ **Idempotent:** Skills should be safe to run multiple times

---

## 📊 Skill Usage Matrix

| Skill | Frequency | Complexity | Dependencies |
|-------|-----------|------------|--------------|
| **shopify-sync** | Daily | Low | FastAPI, Shopify |
| **api-test** | On changes | Low | FastAPI |
| **db-migrate** | Weekly | Medium | Alembic, PostgreSQL |
| **ui-ux** | As needed | Low | None (guidance only) |
| **create-component** | As needed | Low | TypeScript, Node.js |

---

## 🐛 Troubleshooting

### "Cannot connect to backend"
- Ensure FastAPI is running: `cd backend/turnify-api && uvicorn app.main:app --reload`
- Check port 8000 is available
- Verify health: `curl http://localhost:8000/health`

### "Alembic not configured"
- Navigate to backend directory: `cd backend/turnify-api`
- Check alembic.ini exists
- Verify database connection in .env

### "Component already exists"
- Choose a different component name
- Or delete existing component if appropriate

### "Permission denied"
- Make scripts executable: `chmod +x scripts/*.py scripts/*.sh`
- Check file ownership: `ls -la scripts/`

---

## 🔄 Updating Skills

To update a skill:

1. Edit the script file in `scripts/`
2. Update SKILL.md if interface changes
3. Test the updated skill
4. Document changes in commit message

---

## 💡 Future Skills Ideas

Potential skills to add:

- **deploy** - Deploy frontend to Vercel and backend to Railway
- **seed-db** - Seed database with test data
- **backup** - Backup PostgreSQL database
- **logs** - View and filter backend logs
- **perf-test** - Run performance tests on API
- **lint-fix** - Run linters and auto-fix issues
- **type-check** - Run TypeScript type checking
- **generate-docs** - Generate API documentation

---

## 📞 Support

For issues or questions about skills:
1. Check the skill's SKILL.md file
2. Review the script source code
3. Check troubleshooting section above
4. Ask Claude for help: "How do I use the shopify-sync skill?"

---

## 📄 License

These skills are part of the Turnify B2B Return Portal project.
Proprietary - Turnify Inc.

---

**Last Updated**: January 25, 2026
**Created By**: Claude Sonnet 4.5
**Skills Version**: 1.0
