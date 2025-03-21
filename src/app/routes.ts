
export const routes = [
  {
    path: 'filterSamp',
    data: {
      completeStatic: true,
      listOrigin: 'https://jsonplaceholder.typicode.com/users',
    },
    loadChildren: () =>
      import('../../src/app/filter-samp/filter-samp.module').then(m => m.FilterSampModule),
  },
  {
    path: 'modalSamp',
    loadChildren: () =>
      import('../../src/app/modal-samp/modal-samp.module').then(m => m.ModalSampModule),
  },
  {
    path: 'mixinSamp',
    loadChildren: () => import('../../src/app/mixins/mixins.module').then(m => m.MixinsModule),
  },
  {
    path: 'htmlLoad',
    loadChildren: () =>
      import('../../src/app/html-load/html-load.module').then(m => m.HtmlLoadModule),
  },
  // {
  //   path: 'popup',
  //   outlet: 'popup',
  //   loadChildren: '../../src/app/routed-popup/routed-popup.module#RoutedPopupModule',
  // },
  {
    path: 'requiredAttributes',
    loadChildren: () =>
      import('../../src/app/required-attributes/required-attributes.module').then(
        m => m.RequiredAttributesModule
      ),
  },
  {
    path: 'viewModel',
    loadChildren: () =>
      import('../../src/app/view-model/view-model.module').then(m => m.ViewModelModule),
  },
  {
    path: 'complexAPI',
    loadChildren: () =>
      import('../../src/app/complex-api/complex-api.module').then(m => m.ComplexAPIModule),
  },
  {
    path: 'pokeAPI',
    loadChildren: () => import('../../src/app/poke-api/poke-api.module').then(m => m.PokeApiModule),
  },
  {
    path: 'observableState',
    loadChildren: () =>
      import('../../src/app/observable-state/observable-state.module').then(
        m => m.ObservableStateModule
      ),
  },
  {
    path: 'DirectiveSamp',
    loadChildren: () =>
      import('../../src/app/directives/directives.module').then(m => m.DirectivesModule),
  },
  {
    path: 'svg',
    loadChildren: () =>
      import('../../src/app/svg-calendar/svg-calendar.module').then(m => m.SvgCalendarModule),
  },
  {
    path: 'testOb',
    loadChildren: () => import('../../src/app/test/test.module').then(module => module.TestModule),
  },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'dynhtml', loadChildren: () => import('./dynamichtml/dynamichtml.module').then(m => m.DynamichtmlModule) },
  { path: 'snow', loadChildren: () => import('./snow/snow.module').then(m => m.SnowModule) },
  { path: 'tumblr', loadChildren: () => import('./tumblr/tumblr.module').then(m => m.TumblrModule) },
  { path: 'bigData', loadChildren: () => import('./big-data/big-data.module').then(m => m.BigDataModule) },
  { path: 'svgTest', loadChildren: () => import('./svg-test/svg-test.module').then(m => m.SvgTestModule) },
  { path: 'pannel', loadChildren: () => import('./pannel-stuff/pannel-stuff.module').then(m => m.PannelStuffModule) },
  { path: 'clock', loadChildren: () => import('./analog-clock/analog-clock.module').then(m => m.AnalogClockModule) },
  { path: 'gridThings', loadChildren: () => import('./gridthings/gridthings/gridthings.module').then(m => m.GridthingsModule) },
  { path: 'bintree', loadChildren: () => import('./bintree/bintree.module').then(m => m.BintreeModule) },
  { path: 'localState', loadChildren: () => import('./local-state/local-state.module').then(m => m.LocalStateModule) },
  { path: 'lazyComponents', loadChildren: () => import('./lazy-component/lazy-component.module').then(m => m.LazyComponentModule) },
  { path: 'svgTimer', loadChildren: () => import('./svg-timer/svg-timer.module').then(m => m.SvgTimerModule) },
  { path: 'svgClock', loadChildren: () => import('./svg-clock/svg-clock.module').then(m => m.SvgClockModule) },
  { path: 'dynForm', loadChildren: () => import('./dyn-form/dyn-form-routing').then(m => m.routes) },
  { path: 'rxjsTest', loadComponent: () => import('./rxjstest/rxjstest.component').then(m => m.RxjstestComponent) },
  { path: 'unsubSample', loadComponent: () => import('./unsub-sample/unsub-sample.component').then(m => m.UnsubSampleComponent) },
  { path: 'unsubSample/:id', loadComponent: () => import('./unsub-sample/unsub-sample.component').then(m => m.UnsubSampleComponent) },
  { path: 'rvt', loadChildren: () => import('./rvt/routes')},
  { path: 'gridCalender', loadComponent: () => import('./grid-calender/grid-calender.component').then(m => m.GridCalenderComponent) },
  { path: '**', redirectTo: 'gridCalender' },
];
