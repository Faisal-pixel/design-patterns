interface PaymentGateway {
    charge(amount: number): Promise<void>
}

class ExternalPaymentProvider {
    async makePayment(
        amountInKobo: number
    ): Promise<void> {
        console.log("Processing Payment", amountInKobo)
    }
}

class PaymentAdapter implements PaymentGateway {
    private provider: ExternalPaymentProvider
    constructor(
        provider: ExternalPaymentProvider
    ) {
        this.provider = provider;
    }

    async charge(amount: number): Promise<void> {
        await this.provider.makePayment(amount * 100)
    }
}