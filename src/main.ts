import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

// CSS-Imports
import 'primeicons/primeicons.css';
import './assets/global.css';
import '/node_modules/primeflex/primeflex.css';
import { definePreset } from '@primevue/themes';

// Directive/Service-Imports
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import BadgeDirective from 'primevue/badgedirective';

// Component-Imports
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import Editor from 'primevue/editor';
import PrimeButton from 'primevue/button';
import ButtonGroup from 'primevue/buttongroup';
import MenuBar from 'primevue/menubar';
import TabMenu from 'primevue/tabmenu';
import Inplace from 'primevue/inplace';
import Toast from 'primevue/toast';
import Stepper from 'primevue/stepper';
import Toolbar from 'primevue/toolbar';
import ConfirmDialog from 'primevue/confirmdialog';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Password from 'primevue/password';
import SplitButton from 'primevue/splitbutton';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import Breadcrumb from 'primevue/breadcrumb';
import SpeedDial from 'primevue/speeddial';
import Column from 'primevue/column';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Avatar from 'primevue/avatar';
import Ripple from 'primevue/ripple';
import MultiSelect from 'primevue/multiselect';
import DialogPrime from 'primevue/dialog';
import Tooltip from 'primevue/tooltip';
import Listbox from 'primevue/listbox';
import Badge from 'primevue/badge';
import Tag from 'primevue/tag';
import Menu from 'primevue/menu';
import TabPanel from 'primevue/tabpanel';
import Image from 'primevue/image';
import Dialog from 'primevue/dialog';
import SelectButton from 'primevue/selectbutton';
import ToggleButton from 'primevue/togglebutton';
import FileUpload from 'primevue/fileupload';
import Accordion from 'primevue/accordion';
import Carousel from 'primevue/carousel';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';
import ContextMenu from 'primevue/contextmenu';
import Skeleton from 'primevue/skeleton';
import ScrollPanel from 'primevue/scrollpanel';
import RadioButton from 'primevue/radiobutton';

import Fieldset from 'primevue/fieldset';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Lara from '@primevue/themes/lara';

const app = createApp(App);

const MyPreset = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{rose.50}',
      100: '{rose.100}',
      200: '{rose.200}',
      300: '{rose.300}',
      400: '{rose.400}',
      500: '{rose.500}',
      600: '{rose.600}',
      700: '{rose.700}',
      800: '{rose.800}',
      900: '{rose.900}',
      950: '{rose.950}'
    },
    secondary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    },
    formField: {
      paddingX: '1rem',
      paddingY: '1rem'
    },
    colorScheme: {
      light: {
        formField: {
          hoverBoColor: '{primary.color}'
        },
        surface: {
          0: '#ffffff',
          50: '{orange.50}',
          100: '{orange.100}',
          200: '{orange.200}',
          300: '{orange.300}',
          400: '{orange.400}',
          500: '{orange.500}',
          600: '{orange.600}',
          700: '{orange.700}',
          800: '{orange.800}',
          900: '{orange.900}',
          950: '{orange.950}'
        }
      },
      dark: {
        formField: {
          hoverHoverColor: '{primary.color}'
        }
      }
    }
  }
});

// PrimeVue Localization
app.use(PrimeVue, {
  locale: 'de',
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'r',
      darkModeSelector: 'None',
      cssLayer: false
    }
  }
});

// Plugins
const vuePlugins = [router, createPinia(), PrimeVue, ToastService, ConfirmationService, VueQueryPlugin];
vuePlugins.forEach((plugin) => app.use(plugin));

// Directives
const directives = {
  ripple: Ripple,
  tooltip: Tooltip,
  badge: BadgeDirective
};
Object.entries(directives).forEach(([name, directive]) => app.directive(name, directive));

// Components
const components = {
  Toast,
  Inplace,
  Badge,
  Tag,
  MenuBar,
  Textarea,
  Editor,
  TabMenu,
  Toolbar,
  Stepper,
  Splitter,
  SplitterPanel,
  Card,
  DialogPrime,
  Fieldset,
  Listbox,
  DataTable,
  DataView,
  PrimeButton,
  ButtonGroup,
  InputText,
  SplitButton,
  Breadcrumb,
  Password,
  InputMask,
  InputNumber,
  InputGroupAddon,
  InputGroup,
  InputIcon,
  IconField,
  Divider,
  MultiSelect,
  Column,
  Avatar,
  Menu,
  SpeedDial,
  TabPanel,
  Image,
  Dialog,
  SelectButton,
  ToggleButton,
  FileUpload,
  Accordion,
  Checkbox,
  ContextMenu,
  ConfirmDialog,
  ProgressBar,
  ProgressSpinner,
  Message,
  Skeleton,
  Carousel,
  ScrollPanel,
  RadioButton
};

Object.entries(components).forEach(([name, component]) => app.component(name, component));

app.mount('#app');
