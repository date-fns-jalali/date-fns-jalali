# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning].

This change log follows the format documented in [Keep a CHANGELOG].

[semantic versioning]: http://semver.org/
[keep a changelog]: http://keepachangelog.com/

## v1.2.0 - 2024-03-09

### Added

- Added support for [Sinon's fake timers](https://github.com/sinonjs/fake-timers), frameworks that rely on it (Jest), and other time manipulation libraries that override the `Date.now` and the `Date` constructor.

## v1.1.1 - 2023-12-22

### Fixed

- Made the package compatible with a wide variety of environments by updating the `exports` in the package.

## v1.1.0 - 2023-04-10

### Added

- Added support for string parsing.

## v1.0.0 - 2022-07-10

Initial version
