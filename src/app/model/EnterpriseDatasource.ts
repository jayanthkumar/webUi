// import IEnterpriseGetRowsParams from 'ag-grid-enterprise'

export class EnterpriseDatasource { // implements IEnterpriseDatasource
    count = 1;
    getRows(params): void {
        var request = params.request;
        var groupKeys = request.groupKeys;
        console.log("Group keys are:", groupKeys);
        console.log("col row groups", params.request.rowGroupCols);
        var resultForGrid;
        if(groupKeys.length == 0) {
            resultForGrid = [{
                orgHierarchy: ["Erica Rogers"],
                jobTitle: "CEO",
                employmentType: "Permanent"
              },
              {
                orgHierarchy: ["Leah Flowers"],
                jobTitle: "Parts Technician",
                employmentType: "Contract"
              }
            ];
        } else if(groupKeys[0] == "Erica Rogers"){
            resultForGrid = [{
                orgHierarchy: ["Malcolm Barrett"],
                jobTitle: "Exec. Vice President",
                employmentType: "Permanent"
              }];
        } else if (groupKeys[0] == "Malcolm Barrett") {
            resultForGrid = [{
                orgHierarchy: ["Esther Baker"],
                jobTitle: "Director of Operations",
                employmentType: "Permanent"
            }];
        }
        var lastRow = resultForGrid.length;
        params.successCallback(resultForGrid, lastRow);
        this.count = this.count + 1;
    }
}