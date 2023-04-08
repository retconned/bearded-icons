import { audio, image, video } from "../data/media";
import { make } from "../helper";

export default {
  ...make(audio, "_f_audio"),
  ...make(video, "_f_video"),
  ...make(image, "_f_image"),
  "7z": "_f_zip",
  "7zip": "_f_zip",
  "blade.php": "_f_blade",
  "cfg.dist": "_f_conf",
  "cjs.map": "_f_jsmap",
  "controller.js": "_f_nestjscontroller",
  "controller.ts": "_f_nestjscontroller",
  "css.map": "_f_cssmap",
  "d.ts": "_f_typescriptdef",
  "decorator.js": "_f_nestjsdecorator",
  "decorator.ts": "_f_nestjsdecorator",
  "drawio.png": "_f_drawio",
  "drawio.svg": "_f_drawio",
  "e2e-spec.ts": "_f_testts",
  "e2e-spec.tsx": "_f_testts",
  "e2e-test.ts": "_f_testts",
  "e2e-test.tsx": "_f_testts",
  "filter.js": "_f_nestjsfilter",
  "filter.ts": "_f_nestjsfilter",
  "format.ps1xml": "_f_powershell_format",
  "gemfile.lock": "_f_bundler",
  "gradle.kts": "_f_gradlekotlin",
  "guard.js": "_f_nestjsguard",
  "guard.ts": "_f_nestjsguard",
  "jar.old": "_f_jar",
  "js.flow": "_f_flow",
  "js.map": "_f_jsmap",
  "js.snap": "_f_jest_snapshot",
  "json-ld": "_f_jsonld",
  "jsx.snap": "_f_jest_snapshot",
  "layout.htm": "_f_layout",
  "layout.html": "_f_layout",
  "marko.js": "_f_markojs",
  "mjs.map": "_f_jsmap",
  "module.ts": "_f_nestjsmodule",
  "resolver.js": "_f_nestjscontroller",
  "resolver.ts": "_f_nestjscontroller",
  "service.js": "_f_nestjsservice",
  "service.ts": "_f_nestjsservice",
  "spec.js": "_f_testjs",
  "spec.jsx": "_f_testjs",
  "spec.mjs": "_f_testjs",
  "spec.ts": "_f_testts",
  "spec.tsx": "_f_testts",
  "stories.js": "_f_storybook",
  "stories.jsx": "_f_storybook",
  "stories.ts": "_f_storybook",
  "stories.tsx": "_f_storybook",
  "story.js": "_f_storybook",
  "story.jsx": "_f_storybook",
  "story.ts": "_f_storybook",
  "story.tsx": "_f_storybook",
  "test.cjs": "_f_testjs",
  "test.cts": "_f_testts",
  "test.js": "_f_testjs",
  "test.jsx": "_f_testjs",
  "test.mjs": "_f_testjs",
  "test.mts": "_f_testts",
  "test.ts": "_f_testts",
  "test.tsx": "_f_testts",
  "ts.snap": "_f_jest_snapshot",
  "tsx.snap": "_f_jest_snapshot",
  "types.ps1xml": "_f_powershell_types",
  a: "_f_binary",
  accda: "_f_access",
  accdb: "_f_access",
  accdc: "_f_access",
  accde: "_f_access",
  accdp: "_f_access",
  accdr: "_f_access",
  accdt: "_f_access",
  accdu: "_f_access",
  ade: "_f_access",
  adoc: "_f_adoc",
  adp: "_f_access",
  afdesign: "_f_afdesign",
  affinitydesigner: "_f_afdesign",
  affinityphoto: "_f_afphoto",
  affinitypublisher: "_f_afpub",
  afphoto: "_f_afphoto",
  afpub: "_f_afpub",
  ai: "_f_ai",
  app: "_f_binary",
  ascx: "_f_aspx",
  asm: "_f_binary",
  aspx: "_f_aspx",
  astro: "_f_astro",
  awk: "_f_awk",
  bat: "_f_bat",
  bc: "_f_llvm",
  bcmx: "_f_outlook",
  bicep: "_f_bicep",
  bin: "_f_binary",
  blade: "_f_blade",
  bz2: "_f_zip",
  bzip2: "_f_zip",
  c: "_f_c",
  cake: "_f_cake",
  cer: "_f_cert",
  pvk: "_f_pvk",
  pfx: "_f_pfx",
  spc: "_f_spc",
  cfg: "_f_conf",
  civet: "_f_civet",
  cjm: "_f_clojure",
  cl: "_f_opencl",
  class: "_f_class",
  cli: "_f_cli",
  clj: "_f_clojure",
  cljc: "_f_clojure",
  cljs: "_f_clojure",
  cljx: "_f_clojure",
  cma: "_f_binary",
  cmd: "_f_cli",
  cmi: "_f_binary",
  cmo: "_f_binary",
  cmx: "_f_binary",
  cmxa: "_f_binary",
  comp: "_f_opengl",
  conf: "_f_conf",
  cpp: "_f_cpp",
  cr: "_f_crystal",
  crec: "_f_lync",
  crl: "_f_cert",
  crt: "_f_cert",
  cs: "_f_csharp",
  cshtml: "_f_cshtml",
  csproj: "_f_csproj",
  csr: "_f_cert",
  css: "_f_css",
  csv: "_f_csv",
  csx: "_f_csharp",
  d: "_f_d",
  dart: "_f_dartlang",
  db: "_f_sqlite",
  db3: "_f_sqlite",
  der: "_f_cert",
  diff: "_f_diff",
  dio: "_f_drawio",
  djt: "_f_django",
  dll: "_f_binary",
  dmp: "_f_log",
  doc: "_f_word",
  docm: "_f_word",
  docx: "_f_word",
  dot: "_f_word",
  dotm: "_f_word",
  dotx: "_f_word",
  drawio: "_f_drawio",
  dta: "_f_stata",
  eco: "_f_docpad",
  edge: "_f_edge",
  edn: "_f_clojure",
  eex: "_f_eex",
  ejs: "_f_ejs",
  el: "_f_emacs",
  elc: "_f_emacs",
  elm: "_f_elm",
  enc: "_f_license",
  ensime: "_f_ensime",
  env: "_f_env",
  eps: "_f_eps",
  erb: "_f_erb",
  erl: "_f_erlang",
  eskip: "_f_skipper",
  ex: "_f_elixir",
  exe: "_f_binary",
  exp: "_f_tcl",
  exs: "_f_exs",
  fbx: "_f_fbx",
  feature: "_f_cucumber",
  fig: "_f_figma",
  fish: "_f_shell",
  fla: "_f_fla",
  fods: "_f_excel",
  frag: "_f_opengl",
  fs: "_f_fsharp",
  fsproj: "_f_fsproj",
  ftl: "_f_freemarker",
  gbl: "_f_gbl",
  gd: "_f_godot",
  gemfile: "_f_bundler",
  geom: "_f_opengl",
  gif: "_f_imagegif",
  glsl: "_f_opengl",
  gmx: "_f_gamemaker",
  go: "_f_go",
  godot: "_f_godot",
  gql: "_f_graphql",
  gradle: "_f_gradle",
  groovy: "_f_groovy",
  gz: "_f_zip",
  h: "_f_cheader",
  haml: "_f_haml",
  hbs: "_f_handlebars",
  hcl: "_f_hashicorp",
  hl: "_f_binary",
  hlsl: "_f_opengl",
  hpp: "_f_hpp",
  hs: "_f_haskell",
  html: "_f_html",
  hxp: "_f_lime",
  hxproj: "_f_haxedevelop",
  ibc: "_f_idrisbin",
  ico: "_f_imageico",
  idr: "_f_idris",
  ilk: "_f_binary",
  imba: "_f_imba",
  inc: "_f_inc",
  include: "_f_inc",
  info: "_f_info",
  infopathxml: "_f_infopath",
  ini: "_f_conf",
  ino: "_f_arduino",
  ipkg: "_f_idrispkg",
  ipynb: "_f_ipynb",
  iuml: "_f_plantuml",
  jar: "_f_jar",
  java: "_f_java",
  jbuilder: "_f_jbuilder",
  jepg: "_f_imagejpg",
  jinja: "_f_jinja",
  jl: "_f_julia",
  jpg: "_f_imagejpg",
  json5: "_f_json5",
  jsonld: "_f_jsonld",
  jsp: "_f_jsp",
  jss: "_f_jss",
  key: "_f_key",
  kit: "_f_codekit",
  kt: "_f_kotlin",
  kts: "_f_kotlins",
  laccdb: "_f_access",
  ldb: "_f_access",
  less: "_f_less",
  lib: "_f_binary",
  lidr: "_f_idris",
  liquid: "_f_liquid",
  ll: "_f_llvm",
  lnk: "_f_lnk",
  log: "_f_log",
  ls: "_f_livescript",
  lucee: "_f_cf",
  m: "_f_m",
  makefile: "_f_makefile",
  mam: "_f_access",
  map: "_f_map",
  maq: "_f_access",
  markdown: "_f_markdown",
  master: "_f_layout",
  mdb: "_f_access",
  mdown: "_f_markdown",
  mdw: "_f_access",
  mdx: "_f_markdownx",
  mesh: "_f_mesh",
  mex: "_f_matlab",
  mexn: "_f_matlab",
  mexrs6: "_f_matlab",
  mf: "_f_manifest",
  mint: "_f_mint",
  mjml: "_f_mjml",
  ml: "_f_ocaml",
  mli: "_f_ocamli",
  mll: "_f_ocamll",
  mly: "_f_ocamly",
  mn: "_f_matlab",
  mo: "_f_motoko",
  mov: "_f_mov",
  mp3: "_f_audiomp3",
  mp4: "_f_mp4",
  msg: "_f_outlook",
  mst: "_f_mustache",
  mum: "_f_matlab",
  mustache: "_f_mustache",
  mx: "_f_matlab",
  mx3: "_f_matlab",
  n: "_f_binary",
  ndll: "_f_binary",
  neon: "_f_neon",
  nim: "_f_nim",
  nix: "_f_nix",
  njk: "_f_njk",
  njs: "_f_nunjucks",
  njsproj: "_f_njsproj",
  nunj: "_f_nunjucks",
  nupkg: "_f_nuget",
  nuspec: "_f_nuget",
  nvim: "_f_nvim",
  o: "_f_binary",
  obj: "_f_binary",
  ocrec: "_f_lync",
  ods: "_f_excel",
  oft: "_f_outlook",
  ogg: "_f_audioogg",
  one: "_f_onenote",
  onepkg: "_f_onenote",
  onetoc: "_f_onenote",
  onetoc2: "_f_onenote",
  opencl: "_f_opencl",
  org: "_f_org",
  otf: "_f_fontotf",
  otm: "_f_outlook",
  ovpn: "_f_ovpn",
  P: "_f_prolog",
  p12: "_f_cert",
  p7b: "_f_cert",
  p7r: "_f_cert",
  pa: "_f_powerpoint",
  patch: "_f_diff",
  pcd: "_f_pcl",
  pck: "_f_plsql_package",
  pdb: "_f_binary",
  pde: "_f_arduino",
  pdf: "_f_pdf",
  pem: "_f_key",
  pex: "_f_xml",
  phar: "_f_php",
  php1: "_f_php",
  php2: "_f_php",
  php3: "_f_php",
  php4: "_f_php",
  php5: "_f_php",
  php6: "_f_php",
  phps: "_f_php",
  phpsa: "_f_php",
  phpt: "_f_php",
  phtml: "_f_php",
  pkb: "_f_plsql_package_body",
  pkg: "_f_package",
  pkh: "_f_plsql_package_header",
  pks: "_f_plsql_package_spec",
  pl: "_f_perl",
  plantuml: "_f_plantuml",
  plist: "_f_config",
  pm: "_f_perlm",
  png: "_f_imagepng",
  po: "_f_poedit",
  postcss: "_f_postcssconfig",
  pot: "_f_powerpoint",
  potm: "_f_powerpoint",
  potx: "_f_powerpoint",
  ppa: "_f_powerpoint",
  ppam: "_f_powerpoint",
  pps: "_f_powerpoint",
  ppsm: "_f_powerpoint",
  ppsx: "_f_powerpoint",
  ppt: "_f_powerpoint",
  pptm: "_f_powerpoint",
  pptx: "_f_powerpoint",
  pri: "_f_qt",
  prisma: "_f_prisma",
  pro: "_f_prolog",
  properties: "_f_properties",
  ps1: "_f_powershell",
  psd: "_f_photoshop",
  psd1: "_f_powershelldata",
  psm1: "_f_powershellmodule",
  psmdcp: "_f_nuget",
  pst: "_f_outlook",
  pu: "_f_plantuml",
  pub: "_f_publisher",
  puml: "_f_plantuml",
  puz: "_f_publisher",
  pyc: "_f_binary",
  pyd: "_f_binary",
  pyo: "_f_binary",
  q: "_f_q",
  qbs: "_f_qbs",
  qvd: "_f_qlikview",
  qvw: "_f_qlikview",
  rake: "_f_rake",
  rar: "_f_zip",
  gzip: "_f_zip",
  razor: "_f_razor",
  rb: "_f_ruby",
  reg: "_f_registry",
  rego: "_f_rego",
  res: "_f_rescript",
  resi: "_f_rescript",
  rjson: "_f_rjson",
  rproj: "_f_rproj",
  rs: "_f_rust",
  rsx: "_f_rust",
  rt: "_f_reacttemplate",
  rwd: "_f_matlab",
  sass: "_f_scss",
  sc: "_f_scala",
  scala: "_f_scala",
  scpt: "_f_binary",
  scptd: "_f_binary",
  scss: "_f_scss",
  sentinel: "_f_sentinel",
  sig: "_f_onenote",
  sketch: "_f_sketch",
  slddc: "_f_matlab",
  sldm: "_f_powerpoint",
  sldx: "_f_powerpoint",
  sln: "_f_sln",
  sls: "_f_saltstack",
  slx: "_f_matlab",
  smv: "_f_matlab",
  so: "_f_binary",
  sol: "_f_sol",
  sql: "_f_sql",
  sqlite: "_f_sqlite",
  sqlite3: "_f_sqlite",
  src: "_f_cert",
  sss: "_f_sss",
  sst: "_f_cert",
  stl: "_f_cert",
  storyboard: "_f_storyboard",
  styl: "_f_stylus",
  suo: "_f_suo",
  svelte: "_f_svelte",
  svg: "_f_svg",
  swc: "_f_flash",
  swf: "_f_flash",
  swift: "_f_swift",
  tar: "_f_zip",
  tcl: "_f_tcl",
  tesc: "_f_opengl",
  tese: "_f_opengl",
  tex: "_f_latex",
  texi: "_f_tex",
  tf: "_f_terraform",
  tfstate: "_f_terraform",
  tfvars: "_f_terraformvars",
  tgz: "_f_zip",
  tikz: "_f_tex",
  tlg: "_f_log",
  tmlanguage: "_f_xml",
  tmpl: "_f_tmpl",
  todo: "_f_todo",
  toml: "_f_toml",
  tpl: "_f_smarty",
  tres: "_f_tres",
  tscn: "_f_tscn",
  tst: "_f_test",
  tsx: "_f_reactts",
  jsx: "_f_reactjs",
  tt2: "_f_tt",
  ttf: "_f_fontttf",
  twig: "_f_twig",
  txt: "_f_txt",
  ui: "_f_ui",
  unity: "_f_shaderlab",
  user: "_f_user",
  v: "_f_v",
  vala: "_f_vala",
  vapi: "_f_vapi",
  vash: "_f_vash",
  vbhtml: "_f_vbhtml",
  vbproj: "_f_vbproj",
  vcxproj: "_f_vcxproj",
  vert: "_f_opengl",
  vhd: "_f_vhd",
  vhdl: "_f_vhdl",
  vsix: "_f_vscode",
  vsixmanifest: "_f_manifest",
  wasm: "_f_wasm",
  wav: "_f_audiowav",
  webp: "_f_imagewebp",
  wll: "_f_word",
  woff: "_f_fontwoff",
  eot: "_f_fonteot",
  woff2: "_f_fontwoff2",
  wv: "_f_audiowv",
  wxml: "_f_wxml",
  wxss: "_f_wxss",
  xcodeproj: "_f_xcode",
  xfl: "_f_xfl",
  xib: "_f_xib",
  xlf: "_f_xliff",
  xliff: "_f_xliff",
  xls: "_f_excel",
  xlsm: "_f_excel",
  xlsx: "_f_excel",
  xsf: "_f_infopath",
  xsn: "_f_infopath",
  xtp2: "_f_infopath",
  xvc: "_f_matlab",
  xz: "_f_zip",
  yy: "_f_gamemaker2",
  yyp: "_f_gamemaker2",
  zig: "_f_zig",
  zip: "_f_zip",
  zipx: "_f_zip",
  zz: "_f_zip",
  deflate: "_f_zip",
  brotli: "_f_brotli",
  kra: "_f_krita",
  mgcb: "_f_mgcb",
  anim: "_f_anim",
  "cy.ts": "_f_cypressts",
  "cy.js": "_f_cypressjs",
};
