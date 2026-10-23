// 1. The product interface.
// Every button must implement these methods.

interface Button {
  render(): void;

  onClick(callback: () => void): void;
}

// 2. The concrete product for Windows.

class WindowsButton implements Button {
  render(): void {
    console.log("Rendering a Windows-style button.");
  }

  onClick(callback: () => void): void {
    console.log("Registering a Windows button click handler.");

    // A real implementation would connect callback
    // to the native Windows button's click event.
  }
}

// 3. The concrete product for the web.

class HTMLButton implements Button {
  render(): void {
    console.log("Rendering an HTML button.");
  }

  onClick(callback: () => void): void {
    console.log("Registering an HTML button click handler.");

    // A real implementation would connect callback
    // to the HTML element's click event.
  }
}

// 4. The creator superclass.

abstract class Dialog {
  abstract createButton(): Button;

  render(): void {
    const okButton: Button = this.createButton();

    okButton.onClick(() => {
      this.closeDialog();
    });

    okButton.render();
  }

  protected closeDialog(): void {
    console.log("Closing the dialog.");
  }
}

// 5. The concrete creator for Windows.

class WindowsDialog extends Dialog {
  override createButton(): Button {
    return new WindowsButton();
  }
}

// 6. The concrete creator for the web.

class WebDialog extends Dialog {
  override createButton(): Button {
    return new HTMLButton();
  }
}

// 7. The application uses the creator.

class Application {
  private dialog!: Dialog;

  initialize(os: "Windows" | "Web"): void {
    if (os === "Windows") {
      this.dialog = new WindowsDialog();
    } else {
      this.dialog = new WebDialog();
    }
  }

  main(): void {
    this.dialog.render();
  }
}

// 8. Run the application using Windows.

const windowsApp = new Application();

windowsApp.initialize("Windows");
windowsApp.main();

// 9. Run the application using the web.

const webApp = new Application();

webApp.initialize("Web");
webApp.main();