# Journey Route

_Project development tools:_

- [ ] Ruby on Rails
- [ ] Stimulis JS
- [ ] Turbo (Turbo Stream)
- [ ] Tailwind CSS
- [ ] Sidekiq
- [ ] AnyCabel rails integration

---
# Project database structure

Day "(Day of the week)" `has_many :tasks` (datetime: timestamp)

Task `belongs_to :day` (completed: boolean, completed_at: timestamp, day_id: references)

User `has_many :tasks` (email: string, name: string, task_id: references)

Card `has_many :tasks`

Chart "(Chat room)"

---
refactoring:
https://www.youtube.com/watch?v=v6mlOIaeFxg
