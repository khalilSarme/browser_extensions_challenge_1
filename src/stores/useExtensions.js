import {
  defineStore
} from 'pinia'
import {
  ref,
  watch
} from 'vue'

import logoDevlens from '@/assets/logo-devlens.svg'
import logoStyleSpy from '@/assets/logo-style-spy.svg'
import logoSpeedBoost from '@/assets/logo-speed-boost.svg'
import logoJsonWizard from '@/assets/logo-json-wizard.svg'
import logoTabMasterPro from '@/assets/logo-tab-master-pro.svg'
import logoViewportBuddy from '@/assets/logo-viewport-buddy.svg'
import logoMarkupNotes from '@/assets/logo-markup-notes.svg'
import logoGridGuides from '@/assets/logo-grid-guides.svg'
import logoPalettePicker from '@/assets/logo-palette-picker.svg'
import logoLinkChecker from '@/assets/logo-link-checker.svg'
import logoDomSnapshot from '@/assets/logo-dom-snapshot.svg'
import logoConsolePlus from '@/assets/logo-console-plus.svg'

const defaultExtensions = [{
  iid: 1,
  logo: logoDevlens,
  name: "DevLens",
  description: "Quickly inspect page layouts and visualize element boundaries.",
  isActive: false
},
  {
    iid: 2,
    logo: logoStyleSpy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: false
  },
  {
    iid: 3,
    logo: logoSpeedBoost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false
  },
  {
    iid: 4,
    logo: logoJsonWizard,
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: false
  },
  {
    iid: 5,
    logo: logoTabMasterPro,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: false
  },
  {
    iid: 6,
    logo: logoViewportBuddy,
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    isActive: false
  },
  {
    iid: 7,
    logo: logoMarkupNotes,
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: false
  },
  {
    iid: 8,
    logo: logoGridGuides,
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false
  },
  {
    iid: 9,
    logo: logoPalettePicker,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: false
  },
  {
    iid: 10,
    logo: logoLinkChecker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: false
  },
  {
    iid: 11,
    logo: logoDomSnapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false
  },
  {
    iid: 12,
    logo: logoConsolePlus,
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    isActive: false
  }]

export const useExtensions = defineStore('exts', () => {

  const extensions = ref(
    JSON.parse(localStorage.getItem('exts')) || defaultExtensions)

  const FilteredExtensions = ref(extensions.value || [])

  const filterOpt = ref('all')

  const removeExt = (i) => {
    extensions.value.splice(extensions.value.findIndex(e => e.iid == i), 1)
  }

  const toggleActive = (i) => {
    let ext = extensions.value.findIndex(e => e.iid == i)
    extensions.value[ext].isActive = !extensions.value[ext].isActive
  }
  
  const redownload = () => {
    extensions.value = defaultExtensions
    FilteredExtensions.value = extensions.value
  }

  watch(() => extensions.value,
    async (newVal) => {
      await localStorage.setItem('exts', JSON.stringify(newVal))
    },
    {
      deep: true
    })

  return {
    redownload,
    FilteredExtensions,
    filterOpt,
    extensions,
    removeExt,
    toggleActive
  }
})