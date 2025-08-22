module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.dependencies?.postcss) {
        pkg.dependencies.postcss = "8.5.1"; // Force all dependencies to use 8.5.1
      }
      return pkg;
    },
  },
};
