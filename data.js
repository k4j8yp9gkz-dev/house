// ============================================================
// HOUSE HQ — master data
// Maintained by Claude, synced from home-projects/projects/*.md
// Last synced: 2026-07-05
//
// Item fields:
//   id        stable slug (never change once created)
//   name      display name
//   purchased true once bought (checkbox in the UI)
//   source    retailer / order info
//   paid      number (USD) or null if unknown / not yet bought
//   details   free text — specs, ETAs, gotchas
//   image     optional: relative path (e.g. "images/mirror.jpg") or URL
//   emoji     placeholder tile when there's no image
// ============================================================

window.HQ_DATA = {
  house: {
    name: "Our House",
    tagline: "Master record — selections, purchases, budget",
    target: "Christmas 2026",
  },

  rooms: [
    {
      id: "powder-room",
      name: "Powder Room",
      zone: "Zone 22",
      emoji: "🚽",
      accent: "#2e6b4f",
      phase: "in-progress",
      status: "active",
      targetDate: "2026-08-31",
      blurb: "The quick win. Wallpaper + royal blue vanity + aged brass everything. Install: August (Jose, bundled engagement).",
      spec: [
        "Palette: green trellis wallpaper (Ballard Paran) + royal blue vanity + aged brass hardware",
        "Finish standard: AGED BRASS — set by the Hudson Valley light; faucet, towel bar, TP holder all match",
        "Mirror: green frame w/ hand-painted florals (differs from mockup) — room leans green/floral, blue enters via vanity",
        "Room: 6'1\" × 3'8\", hardwood floor stays",
      ],
      items: [
        {
          id: "pr-wallpaper",
          name: "Wallpaper — Ballard Paran Double Roll, Green (WL255 GRN) ×8",
          purchased: true, source: "Ballard Designs", paid: null, emoji: "🌿",
          details: "Delivered Jul 2 — all 8 rolls in the house. Check same dye lot + no damage. NOTE: 8 double rolls ≈ 3× what this room needs — plan the return window.",
        },
        {
          id: "pr-vanity",
          name: "Vanity — Aoibhin 30\", Carrara marble top, Royal Blue base",
          purchased: true, source: "Wayfair — order #4675642235", paid: null, emoji: "🧺",
          details: "In transit, ETA ~Jul 12 (partially shipped — expect two parcels). INSPECT MARBLE TOP IMMEDIATELY on arrival; Wayfair's damage-claim window is short.",
        },
        {
          id: "pr-mirror",
          name: "Mirror — World Market Painted Wall Mirror, green floral frame",
          purchased: true, source: "World Market — SKU 634890", paid: 179.99, emoji: "🪞",
          details: "In transit as of Jul 4. Green frame with hand-painted multicolor florals.",
        },
        {
          id: "pr-light",
          name: "Light fixture — Hudson Valley 4224-AGB bath bar",
          purchased: true, source: "Hudson Valley Lighting", paid: null, emoji: "💡",
          details: "IN HAND. Aged Brass — this fixture sets the finish standard for the whole room. Mounts above mirror.",
        },
        {
          id: "pr-brass-rack",
          name: "Brass multi-rail rack (owned)",
          purchased: true, source: "Already owned", paid: 0, emoji: "🧷",
          details: "In hand. Decision 2026-07-04: mounts on the wall behind the toilet.",
        },
        {
          id: "pr-faucet",
          name: "Faucet — widespread, aged brass + drain assembly + supply lines/valves",
          purchased: false, source: "", paid: null, emoji: "🚰",
          details: "Confirmed NOT purchased — buy before install day. Widespread style per mockup; match Aged Brass standard. Include drain assembly, supply lines, shutoff valves.",
        },
        {
          id: "pr-towel-bar",
          name: "Towel bar / ring — aged brass",
          purchased: false, source: "", paid: null, emoji: "🧻",
          details: "Part of the one 'small stuff' order. Match Aged Brass finish standard.",
        },
        {
          id: "pr-tp-holder",
          name: "Toilet paper holder — aged brass",
          purchased: false, source: "", paid: null, emoji: "🧻",
          details: "Mockup shows it low on the left wall. Match Aged Brass finish standard.",
        },
        {
          id: "pr-vent-cover",
          name: "Wall register concealment — paperable flush-mount vent cover",
          purchased: false, source: "", paid: null, emoji: "🌬️",
          details: "MEASURE OPENING FIRST. Aria-style flat flush-mount that can be wallpapered, OR wrap existing louver in matched paper — decide with Jose. Must keep airflow; never paper over the duct itself.",
        },
        {
          id: "pr-exhaust-fan",
          name: "Ceiling exhaust fan w/ built-in light — replacement unit",
          purchased: false, source: "", paid: null, emoji: "🔆",
          details: "MEASURE existing housing + duct size first. Pick quiet (low-sone), warm light. Swap happens BEFORE wallpaper day.",
        },
        {
          id: "pr-toilet",
          name: "Toilet — cross-project batch (×3: powder, terrace, Z31)",
          purchased: false, source: "", paid: null, emoji: "🚽",
          details: "Batch decision — decide model by ~Jul 11 so this room's unit arrives before install week. Don't let the batch stall this room.",
        },
        {
          id: "pr-primer",
          name: "Wallpaper primer / sizing",
          purchased: false, source: "", paid: null, emoji: "🪣",
          details: "Usually the hanger supplies this — confirm with Jose when booking. Only buy if he doesn't.",
        },
      ],
      deals: [],
    },

    {
      id: "basement",
      name: "Basement Refresh",
      zone: "Zones 18–21",
      emoji: "🛋️",
      accent: "#7a5c3e",
      phase: "scoping",
      status: "active",
      targetDate: "2026-11-15",
      blurb: "Built-ins, paint, wet bar, terrace bath refresh (toilet, vanity, lights, heated towel bar, swimsuit rack). Part of the bundled Jose engagement starting August.",
      spec: [
        "Terrace bath toilet: ~11\" rough-in (bolts to wall) — needs a 10\" rough-in model, NOT standard 12\"",
        "Terrace bath: 5'3\" × 13'6\", with shower; vanity swap stays in same footprint",
        "Terrace bath doubles as pool/swim drop zone — hanging rack for wet bathing suits",
      ],
      items: [
        {
          id: "bs-toilet",
          name: "Toilet (terrace bath) — 10\" rough-in",
          purchased: false, source: "", paid: null, emoji: "🚽",
          details: "Rough-in measures ~11\" bolts-to-wall — standard 12\" models won't fit. Needs 10\" rough-in variant; ideally same line as the powder/Z31 batch so they match.",
        },
        {
          id: "bs-vanity",
          name: "Vanity (terrace bath)",
          purchased: false, source: "", paid: null, emoji: "🧺",
          details: "Same-footprint swap — measure existing width before shopping.",
        },
        {
          id: "bs-bath-lights",
          name: "Light fixtures (terrace bath)",
          purchased: false, source: "", paid: null, emoji: "💡",
          details: "Replacement fixtures; count and style TBD.",
        },
        {
          id: "bs-heated-towel-bar",
          name: "Heated towel bar (terrace bath)",
          purchased: false, source: "", paid: null, emoji: "🔥",
          details: "Hardwired vs. plug-in TBD — hardwired needs the electrician while walls are open; plug-in needs a nearby outlet.",
        },
        {
          id: "bs-swimsuit-rack",
          name: "Hanging rack for bathing suits (terrace bath)",
          purchased: false, source: "", paid: null, emoji: "🩱",
          details: "Wall-mounted, drip-friendly placement (over tile/shower zone ideal).",
        },
        {
          id: "bs-billy",
          name: "Billy bookcases + finish trim",
          purchased: false, source: "IKEA (planned)", paid: null, emoji: "📚",
          details: "Configuration TBD after measurement.",
        },
        {
          id: "bs-ice-machine",
          name: "Ice machine (wet bar)",
          purchased: false, source: "", paid: null, emoji: "🧊",
          details: "Built-in vs. countertop decision first. Can slip to January without ruining Christmas.",
        },
      ],
      deals: [],
    },

    {
      id: "master-suite",
      name: "Master Suite",
      zone: "Zones 24–27",
      emoji: "🛏️",
      accent: "#4a5a8a",
      phase: "scoping",
      status: "active",
      targetDate: "2026-12-15",
      blurb: "The long pole to Christmas: engineer review → layout → bids → permit → 8–10 weeks construction.",
      spec: [],
      items: [],
      deals: [],
    },

    {
      id: "upstairs-baths-doors",
      name: "Upstairs Baths + Doors",
      zone: "Zone 31 + doors",
      emoji: "🚪",
      accent: "#6b4a6e",
      phase: "scoping",
      status: "waiting",
      targetDate: "2026-12-15",
      blurb: "Rides on the master suite crew. Final finishes can slip to January.",
      spec: [],
      items: [
        {
          id: "ub-toilet",
          name: "Toilet (Z31) — cross-project batch",
          purchased: false, source: "", paid: null, emoji: "🚽",
          details: "Same batch as powder room + terrace bath.",
        },
        {
          id: "ub-vanity",
          name: "Vanity (single vs. double TBD)",
          purchased: false, source: "", paid: null, emoji: "🧺",
          details: "Decision pending layout.",
        },
      ],
      deals: [],
    },

    {
      id: "water-leak",
      name: "Leak Repair + Playroom Ceiling",
      zone: "Master bath → playroom",
      emoji: "💧",
      accent: "#3a7a8a",
      phase: "scoping",
      status: "active",
      targetDate: "2026-11-30",
      blurb: "Regrout/reseal + tile swap in August, then ceiling opened, inspected, patched. Finish decision executes in November.",
      spec: [],
      items: [],
      deals: [],
    },

    {
      id: "backyard",
      name: "Backyard Transformation",
      zone: "Exterior",
      emoji: "🌳",
      accent: "#4d7a3a",
      phase: "scoping",
      status: "active",
      targetDate: "2026-11-15",
      blurb: "Hardscape in September (811 locate first), gas fireplace before first cold night, fall planting in October.",
      spec: [],
      items: [],
      deals: [],
    },

    {
      id: "front-exterior",
      name: "Front Exterior + Landscaping",
      zone: "Exterior",
      emoji: "🌷",
      accent: "#a05a3a",
      phase: "scoping",
      status: "active",
      targetDate: "2026-11-30",
      blurb: "Walkthroughs in July (front + backyard as one package), porch repaint + front door + lamps in November.",
      spec: [],
      items: [],
      deals: [],
    },

    {
      id: "attic",
      name: "Attic Envelope",
      zone: "Attic",
      emoji: "🪜",
      accent: "#8a6a3a",
      phase: "scoping",
      status: "active",
      targetDate: "2026-09-30",
      blurb: "HVAC/insulation evaluation in July; envelope work in September before heating season.",
      spec: [],
      items: [],
      deals: [],
    },

    {
      id: "garage-fans",
      name: "Garage Fans",
      zone: "Garage",
      emoji: "🌀",
      accent: "#5a6a72",
      phase: "idea",
      status: "active",
      targetDate: null,
      blurb: "Spec TBD — size, wall vs. ceiling mount, outlet vs. hardwired.",
      spec: [],
      items: [
        {
          id: "gf-fans",
          name: "Garage fan(s) — spec TBD",
          purchased: false, source: "", paid: null, emoji: "🌀",
          details: "Size, wall vs. ceiling mount, outlet vs. hardwired — all TBD.",
        },
      ],
      deals: [],
    },
  ],
};
