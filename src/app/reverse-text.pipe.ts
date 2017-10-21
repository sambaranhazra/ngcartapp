import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "reverseText"
})
export class ReverseTextPipe implements PipeTransform {
  transform(input: string): string {
   return input.split("").reverse().join("");
  }
}
