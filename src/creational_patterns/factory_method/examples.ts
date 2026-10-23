class Notification {
    send(message: string): void {
        console.log(`Sending: ${message}`)
    }

    describe(): string {
        return "A generic notification";
    }
}

class EmailNotification extends Notification {
    override describe(): string {
       return "An email notification" 
    }
}

const email = new EmailNotification();
email.send("Class starts at 10am"); // inherited, unchanged: Sending: Class starts at 10am
console.log(email.describe()); 