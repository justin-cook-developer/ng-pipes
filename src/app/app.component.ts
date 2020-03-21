import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private _name = "";
  private _date = "";
  private _amount = 0;
  private _height = 0;
  private _miles = 0;

  private _car = {
    make: "Toyota",
    model: "Camry",
    year: 2000,
  };

  public get miles(): number {
    return this._miles;
  }

  public set miles(miles: number) {
    this._miles = miles;
  }

  public setMiles(milesString: string): void {
    this.miles = parseFloat(milesString);
  }

  public get car() {
    return this._car;
  }

  public get height(): number {
    return this._height;
  }

  public set height(height: number) {
    this._height = height;
  }

  public setHeight(stringHeight: string): void {
    this.height = parseFloat(stringHeight);
  }

  public get amount(): number {
    return this._amount;
  }

  public set amount(amount: number) {
    this._amount = amount;
  }

  public setAmount(stringNumber: string): void {
    this.amount = parseFloat(stringNumber);
  }

  public get date(): string {
    return this._date;
  }

  public set date(date: string) {
    this._date = date;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }
}
