import {
  afterNextRender,
  afterRender,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output()add = new EventEmitter<{title:string,text:string}>
  add = output<{ title: string; text: string }>();

  // constructor() {
  //   afterRender(() => {
  //     console.log('after render');
  //   });

  //   afterNextRender(() => {
  //     console.log('after next');
  //   });
  // }

  ngOnInit() {
    console.log('oninit');
    console.log(this.form().nativeElement);
  }
  ngAfterViewInit() {
    console.log('after view init');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    // console.log(title, ticketText);
    this.add.emit({ title: title, text: ticketText });
    this.form().nativeElement.reset();
  }
}
