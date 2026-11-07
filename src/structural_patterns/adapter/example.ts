// CLIENT
class StockDashboard {
    constructor(
        private analytics: AnalyticsTarget
    ) {}

    processStockData(xmlData: string): void {
        this.analytics.analyse(xmlData)
    }
}
// Client Interface
interface AnalyticsTarget {
    analyse(data: string): void
}


class XMLToJSONAdapter implements AnalyticsTarget {
    private analyticsLibrary: AnalyticsLibrary | null = null
    constructor( analyticsLibrary: AnalyticsLibrary) {
        this.analyticsLibrary = analyticsLibrary;
    }

    analyse(xmlData: string): void {
        const jsonData = this.convertXMLToJSON(xmlData);
        this.analyticsLibrary?.analyseJSON(jsonData);
    }

    private convertXMLToJSON(xml: string): string {
        // Write some conversion logic 

        return JSON.stringify({ stock: "AAPL", price: 200})
    }
}

class AnalyticsLibrary {
    analyseJSON(jsonData: string): void {
        console.log("Analyzing JSON: ", jsonData)
    }
}




const analyticsLibrary = new AnalyticsLibrary();

const adapter = new XMLToJSONAdapter(analyticsLibrary);

const dashboard = new StockDashboard(adapter)


