module.exports = {
  name: 'landing-page',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/landing-page/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
