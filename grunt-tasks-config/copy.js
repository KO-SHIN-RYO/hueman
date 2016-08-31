module.exports = {
	free: {
		src:  [
			'**',
			'!bin/**',
			'!build/**',
      '!functions/skop-sek/**',
			'!grunt-tasks-config/**',
			'!node_modules/**',
			'!tests/**',
			'!wpcs/**',
			'!.git/**',
			'!gruntfile.js',
			'!package.json',
			'!.gitignore',
			'!.ftpauth',
			'!.travis.yml',
			'!travis-examples/**',
			'!phpunit.xml',
			//'!readme.md',
			'!**/*.db',
      '!patches/**',
      '!inc/init-pro.php',
      '!assets/czr/fmk/**',
      '!assets/front/css/dev-common.css',
      '!assets/front/css/dev-responsive.css',
      '!assets/front/css/dev-font-awesome.css',
      '!npm-debug.log',
		],
		dest: 'build/<%= pkg.name %>/'
	},
  pro: {
    src:  [
      '**',
      '!bin/**',
      '!build/**',
      '!grunt-tasks-config/**',
      '!node_modules/**',
      '!tests/**',
      '!wpcs/**',
      '!.git/**',
      '!.travis.yml',
      '!travis-examples/**',
      '!phpunit.xml',
      '!**/*.db',
      '!patches/**',
      '!.ftpauth',
      '!.gitignore',
      '!gruntfile.js',
      '!package.json',
      '!readme.md',
      '!readme.txt',
      '!screenshot.png',
      '!style.css',
      '!assets/czr/fmk/**',
      '!assets/front/css/dev-common.css',
      '!assets/front/css/dev-responsive.css',
      '!assets/front/css/dev-font-awesome.css',
      '!npm-debug.log',
    ],
    dest: '../hueman-pro/'
  },
  czr_js : {
    expand: true,
    flatten: true,
    filter:'isFile',
    src: [ '<%= paths.czr_assets %>fmk/js/**', '! <%= paths.czr_assets %>fmk/js/control_dev/**', '! <%= paths.czr_assets %>fmk/js/lib/**' ],
    dest: '<%= paths.czr_assets %>js/'
  },
  czr_css : {
    expand: true,
    flatten: true,
    filter:'isFile',
    src: [ '<%= paths.czr_assets %>fmk/css/*.css', '! <%= paths.czr_assets %>fmk/css/lib/**', '! <%= paths.czr_assets %>fmk/js/img/**' ],
    dest: '<%= paths.czr_assets %>css/'
  }
};