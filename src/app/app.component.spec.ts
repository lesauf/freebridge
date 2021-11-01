import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  test("should create the app", () => {
    expect(fixture).toBeTruthy();
  });
});
