const refactor = wines => {
  return wines.map(item => {
    return {
      name: item.Name,
      url: item.Url,
      labelUrl: item.Labels[0].Url,
      type: item.Varietal.WineType.Name
    };
  });
};

module.exports.refactor = refactor;