module.exports = {
  name: 'admin-products',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/admin/products',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
