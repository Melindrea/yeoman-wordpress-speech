# Yeoman-WordPress Speech #

Files for speech on how to integrate [Yeoman](http://yeoman.io/) into a WordPress theme creation workflow. Based on `yo webapp`, this is the bare minimum. The theme it is assumed to be based on is [_s](http://underscores.me/), but which starter theme (if any) to use is obviously up to everyone, the idea is the same.

Built on Yeoman 1.0beta, Grunt 0.4.1, Bower 0.8.6. and [Composer](http://getcomposer.org/)

## Config files #
- `package.json` to handle nodejs dependencies:  `npm install`
- `composer.json` to handle Composer dependencies: Command depends on how it's installed, use the `--dev` flag
- `component.json` to handle Bower components: `bower install`
- `Gemfile` to handle required gems: `bundle install`

## Added Grunt tasks #
- [Modernizr](https://github.com/doctyper/grunt-modernizr)
- [PHPLint](https://github.com/jgable/grunt-phplint)
- [PHPUnit](https://github.com/SaschaGalley/grunt-phpunit)
- [Bumpup](https://github.com/Darsain/grunt-bumpup)
- [CSSCSS](https://github.com/peterkeating/grunt-csscss)

## Composer dependencies #
- [PHPUnit](http://www.phpunit.de/manual/current/en/index.html)

## Gems #
- [Compass](http://compass-style.org/)
- [CSSCSS](http://zmoazeni.github.io/csscss/)

## Bower components #
- [WordPress](http://wordpress.org/)

