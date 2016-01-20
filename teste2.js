$.each(data.jsondata, function(key, value) {
    thead += '<th>' + value.label + '</th>';
    tableData[value.label] = new Object();
    $.each(value.data, function(key1, value1) {
        $.each(value1, function(key2, value2) {
            if(key2 == 0) {
                //here I have the time line, axis Y
                index = value2;
            }
            if(key2 == 1) {
                //here I have the values for the table
                tableData[value.label][index] = value2;
            }
        });
    });
});

thead += '</tr>';