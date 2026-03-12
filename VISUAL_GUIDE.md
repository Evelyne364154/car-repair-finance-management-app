# 🎨 Car Repair Manager - Visual Design Guide

## Desktop View (1024px+)

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║  🚗 CAR REPAIR MANAGER                                                    ║
║  [Purple Gradient Background]                                            ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝

┌────────────────────────────────────────┬────────────────────────────────┐
│                                        │                                │
│  📝 ADD NEW REPAIR                  5  │  📊 REPAIR RECORDS             │
│  Records                               │                                │
│  ┌──────────────────────────────────┐ │  ┌─ TOTAL: 5  ┐  ┌─ TOTAL: $ ┐ │
│  │                                  │ │  │          │  │  │          │ │
│  │ CAR BRAND/MODEL                  │ │  │  $2,450  │  │  │  $490/avg│ │
│  │ [Select ▼] Toyota Corolla        │ │  └──────────┘  └──────────┘ │
│  │                                  │ │                                │
│  │ PROBLEM BEFORE REPAIR            │ │  [📥 EXPORT PDF] Button       │
│  │ [TextArea]                       │ │                                │
│  │ Engine making strange noise...   │ │  ┌────────────────────────────┐│
│  │ (120/250 chars)                  │ │  │ Vehicle │Problem│Solution  ││
│  │                                  │ │  ├────────────────────────────┤│
│  │ REPAIRS DONE                     │ │  │ 🚗     │ Engine│ Replaced  ││
│  │ [TextArea]                       │ │  │ Toyota │ noise │ belt      ││
│  │ Replaced timing belt, fixed...   │ │  │        │       │           ││
│  │ (95/250 chars)                   │ │  │ 🚗     │ Brake │ Changed   ││
│  │                                  │ │  │ Honda  │ issue │ pads      ││
│  │ AMOUNT RECEIVED                  │ │  │        │       │           ││
│  │ [$ 500.00]                       │ │  │ 🚗     │ AC    │ Refilled  ││
│  │                                  │ │  │ Ford   │ not   │ coolant   ││
│  │ ADDITIONAL NOTES                 │ │  │        │ work  │           ││
│  │ [TextArea]                       │ │  ├────────────────────────────┤│
│  │ Customer requested reminder      │ │  │ Showing 1-3 of 5            ││
│  │ (15/150 chars)                   │ │  │ [Prev] [1] [2] [Next]       ││
│  │                                  │ │  └────────────────────────────┘│
│  │                                  │ │                                │
│  │ [💾 SAVE REPAIR RECORD]          │ │                                │
│  │                                  │ │                                │
│  └──────────────────────────────────┘ │                                │
│                                        │                                │
└────────────────────────────────────────┴────────────────────────────────┘
```

---

## Tablet View (768px)

```
╔═════════════════════════════════════════════════════════════════╗
║  🚗 CAR REPAIR MANAGER                                          ║
║  [Purple Gradient Background]                                  ║
╚═════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│  📝 ADD NEW REPAIR                                          5  │
│  Records                                                        │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ CAR BRAND/MODEL                                           │ │
│  │ [Select ▼] Toyota Corolla                                 │ │
│  │                                                           │ │
│  │ PROBLEM BEFORE REPAIR                                    │ │
│  │ [TextArea]                                                │ │
│  │                                                           │ │
│  │ REPAIRS DONE                                             │ │
│  │ [TextArea]                                                │ │
│  │                                                           │ │
│  │ AMOUNT RECEIVED        ADDITIONAL NOTES                  │ │
│  │ [$ 500.00]            [TextArea]                         │ │
│  │                                                           │ │
│  │ [💾 SAVE REPAIR RECORD]                                   │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  📊 REPAIR RECORDS                                              │
│                                                                 │
│  ┌─ TOTAL: 5      ┐ ┌─ TOTAL: $2,450 ┐ ┌─ AVG: $490 ┐       │
│  │              │ │                 │ │             │       │
│  └────────────────┘ └─────────────────┘ └─────────────┘       │
│                                                                 │
│  [📥 EXPORT PDF]                                               │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ Vehicle │ Problem │ Solution │ Amount │ Date              │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │ Toyota  │ Noise   │ Replaced │ $450   │ Jan 15           │ │
│  │ Honda   │ Brakes  │ Changed  │ $320   │ Jan 14           │ │
│  │ Ford    │ AC      │ Refilled │ $280   │ Jan 13           │ │
│  │ BMW     │ Battery │ Replaced │ $600   │ Jan 12           │ │
│  │ Audi    │ Oil     │ Changed  │ $150   │ Jan 11           │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │ [Prev] [1] [2] [Next]                                     │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Mobile View (<768px)

```
╔════════════════════════════════════════╗
║  🚗 CAR REPAIR MANAGER                 ║
║  [Purple Gradient]                     ║
╚════════════════════════════════════════╝

┌────────────────────────────────────────┐
│  📝 ADD NEW REPAIR              [5]    │
│  ┌────────────────────────────────────┐│
│  │ CAR BRAND/MODEL                    ││
│  │ [Select ▼] Select car brand...     ││
│  │                                    ││
│  │ PROBLEM BEFORE REPAIR              ││
│  │ [TextArea]                         ││
│  │ Enter problem...                   ││
│  │                                    ││
│  │ REPAIRS DONE                       ││
│  │ [TextArea]                         ││
│  │ Enter repairs done...              ││
│  │                                    ││
│  │ AMOUNT RECEIVED                    ││
│  │ [$ 0.00]                           ││
│  │                                    ││
│  │ ADDITIONAL NOTES                   ││
│  │ [TextArea]                         ││
│  │ Enter notes...                     ││
│  │                                    ││
│  │ [💾 SAVE REPAIR RECORD]            ││
│  │                                    ││
│  └────────────────────────────────────┘│
│                                        │
│  📊 REPAIR RECORDS                     │
│  ┌──────────┬──────────┬──────────────┐│
│  │ Total: 5 │ $2,450   │ $490 Avg    ││
│  └──────────┴──────────┴──────────────┘│
│                                        │
│  [📥 EXPORT PDF]                       │
│                                        │
│  ┌────────────────────────────────────┐│
│  │ Vehicle │ Problem │ Solution       ││
│  ├────────────────────────────────────┤│
│  │ Toyota  │ Noise   │ Replaced belt  ││
│  │ Amount: $450  Date: Jan 15         ││
│  │ [👁] [🗑]                          ││
│  ├────────────────────────────────────┤│
│  │ Honda   │ Brakes  │ Changed pads   ││
│  │ Amount: $320  Date: Jan 14         ││
│  │ [👁] [🗑]                          ││
│  ├────────────────────────────────────┤│
│  │ Ford    │ AC      │ Refilled cool. ││
│  │ Amount: $280  Date: Jan 13         ││
│  │ [👁] [🗑]                          ││
│  └────────────────────────────────────┘│
│                                        │
│  [Prev] [1] [2] [3] [Next]            │
│                                        │
└────────────────────────────────────────┘
```

---

## Form Field States

### Default State
```
┌─────────────────────────────────────────┐
│ CAR BRAND/MODEL                         │
│ ┌───────────────────────────────────────┐
│ │ Select car brand...                   │
│ └───────────────────────────────────────┘
```

### Focused State
```
┌─────────────────────────────────────────┐
│ CAR BRAND/MODEL                         │
│ ┌═══════════════════════════════════════┐  ← Blue border
│ │ Select car brand...                   │  ← Blue shadow
│ └═══════════════════════════════════════┘
```

### Filled State
```
┌─────────────────────────────────────────┐
│ CAR BRAND/MODEL                         │
│ ┌───────────────────────────────────────┐
│ │ Toyota (Corolla, Camry, RAV4)         │  ← Purple text
│ └───────────────────────────────────────┘
```

### Error State
```
┌─────────────────────────────────────────┐
│ CAR BRAND/MODEL                         │
│ ┌───────────────────────────────────────┐
│ │ Select car brand...                   │
│ └───────────────────────────────────────┘
│ ✕ Please select a car!                  │  ← Red error text
```

---

## Button States

### Default Button
```
┌──────────────────────────────┐
│  💾 SAVE REPAIR RECORD       │  ← Purple gradient
│                              │  Height: 48px
└──────────────────────────────┘
```

### Hover Button
```
┌──────────────────────────────┐ ↑
│  💾 SAVE REPAIR RECORD       │ ← Raised 2px
└──────────────────────────────┘
     (Darker purple)
```

### Active Button
```
┌──────────────────────────────┐ ↓
│  💾 SAVE REPAIR RECORD       │ ← Pressed
└──────────────────────────────┘
```

### Loading Button
```
┌──────────────────────────────┐
│  ⟳ SAVING...                 │  ← Disabled, spinning icon
└──────────────────────────────┘
```

### Disabled Button
```
┌──────────────────────────────┐
│  📥 EXPORT PDF               │  ← Grayed out
└──────────────────────────────┘
   (No data available)
```

---

## Card Styles

### Form Card
```
┌──────────────────────────────────────┐
│ 📝 ADD NEW REPAIR          [5]        │  ← White background
│ ───────────────────────────────────── │  ← Light border bottom
│                                      │
│ [Form content]                       │  ← 24px padding
│                                      │
└──────────────────────────────────────┘
     ↓ Hover: Lifted up, darker shadow
```

### Statistics Card
```
┌────────────────────┐
│ TOTAL RECORDS      │  ← 12px uppercase label
│         5          │  ← 24px bold number
│                    │
│ 16px padding       │
│ 16px border-left   │  ← Purple colored
│ Soft gradient bg   │
└────────────────────┘
     ↓ Hover: Lifted, background change
```

### Table Card
```
┌─────────────────────────────────────────────┐
│ Vehicle │ Problem │ Solution │ Amount │ Date│  ← Purple header
├─────────────────────────────────────────────┤
│ Data    │ Data    │ Data     │ Data   │ Data│  ← White row
├─────────────────────────────────────────────┤
│ Data    │ Data    │ Data     │ Data   │ Data│  ← Light gray row
├─────────────────────────────────────────────┤
│ Data    │ Data    │ Data     │ Data   │ Data│  ← White row
└─────────────────────────────────────────────┘
     ↓ Hover: Light blue background
```

---

## Modal Details

### Modal Structure
```
╔═══════════════════════════════════════════════════╗
║ 🔍 REPAIR DETAILS                            [✕] ║  ← Header
╠═══════════════════════════════════════════════════╣
║                                                   ║
║ 🚗 Vehicle:                                       ║
║ Toyota (Corolla, Camry, RAV4)                     ║
║                                                   ║
║ 📅 Date:                                          ║
║ Jan 15, 2026                                      ║
║                                                   ║
║ ⚠️ Problem Found:                                 ║
║ ┌─────────────────────────────────────────────┐  ║
║ │ Engine making strange noise, overheating    │  ║
║ │ and losing coolant                          │  ║
║ └─────────────────────────────────────────────┘  ║
║                                                   ║
║ ✅ Repairs Completed:                             ║
║ ┌─────────────────────────────────────────────┐  ║
║ │ Replaced timing belt, fixed water pump,     │  ║
║ │ refilled coolant system                     │  ║
║ └─────────────────────────────────────────────┘  ║
║                                                   ║
║ 💰 Amount:                                        ║
║ [$500.00]  ← Green tag                            ║
║                                                   ║
║ 📝 Notes:                                         ║
║ ┌─────────────────────────────────────────────┐  ║
║ │ Customer requested reminder service in     │  ║
║ │ 6 months                                    │  ║
║ └─────────────────────────────────────────────┘  ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

---

## Table Details

### Column Ellipsis
```
Problem Column (Hover):
┌─────────────────────┐
│ Engine making stre… │  ← Truncated
└─────────────────────┘
     ↓ Tooltip on hover
    ┌──────────────────────────────────┐
    │ Engine making strange noise,     │
    │ overheating and losing coolant   │
    └──────────────────────────────────┘
```

### Amount Display
```
Amount: $250.00
   ┌──────────────────┐
   │ $250.00          │  ← Green background
   │ font-weight: 700 │
   │ border-radius: 6 │
   └──────────────────┘
```

### Action Buttons
```
[👁] - View Details Button
  ↓ Hover/Click
  Opens modal with full details

[🗑] - Delete Button
  ↓ Hover: Red outline
  ↓ Click: Confirmation dialog
    Delete this repair? [Yes] [No]
```

---

## Pagination

### Pagination Controls
```
Showing 1–5 of 23 records

[◀ Prev] [1] [2] [3] [4] [Next ▶]
         ↑ Active page (purple)
```

### Pagination States
```
Page 1 of 5:     [◀ Prev] [1] [2] [3] [4] [5] [Next ▶]
                  ↑ Disabled   ↑ Active

Page 3 of 5:     [◀ Prev] [1] [2] [3] [4] [5] [Next ▶]
                           ↑ Active

Page 5 of 5:     [◀ Prev] [1] [2] [3] [4] [5] [Next ▶]
                                              ↑ Disabled
```

---

## Color Swatches

```
Primary Purple
████████████████ #667eea (RGB: 102, 126, 234)

Purple Dark
████████████████ #764ba2 (RGB: 118, 75, 162)

Success Green
████████████████ #52c41a (RGB: 82, 196, 26)

Success Light
████████████████ #95de64 (RGB: 149, 222, 100)

Warning Yellow
████████████████ #faad14 (RGB: 250, 173, 20)

Warning Light
████████████████ #ffc53d (RGB: 255, 197, 61)

Background Light
████████████████ #f8f9fc (RGB: 248, 249, 252)

Text Dark
████████████████ #333333 (RGB: 51, 51, 51)

Text Gray
████████████████ #666666 (RGB: 102, 102, 102)

Border Light
████████████████ #f0f0f0 (RGB: 240, 240, 240)
```

---

## PDF Export Design

```
╔═════════════════════════════════════════════════════════════╗
║                                                             ║
║  Car Repair Records                                         ║
║  ───────────────────────────────────────────────────────   ║
║                                                             ║
║  Generated: January 15, 2026 at 2:30 PM                   ║
║                                                             ║
║  Total Records: 5  |  Total Amount: $2,450  |  Avg: $490   ║
║  ───────────────────────────────────────────────────────   ║
║                                                             ║
║  ┌─────┬────────┬──────────┬──────────┬────────┬──────┐   ║
║  │ #   │ Brand  │ Problem  │ Solution │ Amount │ Date │   ║
║  ├─────┼────────┼──────────┼──────────┼────────┼──────┤   ║
║  │ 1   │ Toyota │ Engine   │ Replaced │ $450   │ 1/15 │   ║
║  │     │        │ noise    │ belt     │        │      │   ║
║  ├─────┼────────┼──────────┼──────────┼────────┼──────┤   ║
║  │ 2   │ Honda  │ Brakes   │ Changed  │ $320   │ 1/14 │   ║
║  │     │        │ issue    │ pads     │        │      │   ║
║  ├─────┼────────┼──────────┼──────────┼────────┼──────┤   ║
║  │ 3   │ Ford   │ AC not   │ Refilled │ $280   │ 1/13 │   ║
║  │     │        │ working  │ coolant  │        │      │   ║
║  └─────┴────────┴──────────┴──────────┴────────┴──────┘   ║
║                                                             ║
║                        Page 1 of 1                          ║
║                                                             ║
╚═════════════════════════════════════════════════════════════╝
```

---

## Empty States

### No Records
```
┌─────────────────────────────────────────┐
│                                         │
│              📋 Empty                   │
│                                         │
│  No repairs recorded yet                │
│  Start by adding your first             │
│  repair record                          │
│                                         │
└─────────────────────────────────────────┘
```

### No Data to Export
```
┌─────────────────────────────────────────┐
│ [📥 EXPORT PDF] (Disabled)              │
│                                         │
│ Tooltip: "No records to export"         │
└─────────────────────────────────────────┘
```

---

## Accessibility Features

### Keyboard Navigation
```
Tab → Focus form fields → purple border
Enter → Submit form
Space → Activate button
Escape → Close modal
Tab → Navigate table
Arrow Keys → Pagination
```

### Screen Reader
```
<form>
  <label for="car-brand">Car Brand/Model *</label>
  <select id="car-brand" aria-required="true">
    
  <label for="problem">Problem Before Repair *</label>
  <textarea id="problem" aria-required="true">
```

---

**Design Version:** 1.0  
**Last Updated:** January 2026  
**Status:** Production Ready ✅
