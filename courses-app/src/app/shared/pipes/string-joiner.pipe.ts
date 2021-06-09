import { Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'stringjoiner',
})
export class StringJoinerTransformPipe implements PipeTransform {
  transform(array: string[], separator: string): string {
    return array.join(separator);
  }
}
