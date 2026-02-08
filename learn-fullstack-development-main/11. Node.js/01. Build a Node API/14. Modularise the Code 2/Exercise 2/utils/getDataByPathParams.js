export const getDataByPathParams = (data, locationType, locationName) => {
    const filteredData = data.filter(item => {
        return item[locationType].toLowerCase() === locationName.toLowerCase();
    });

    return filteredData;
};

