// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject, input } from '@angular/core';
// import { MessagesService } from '../messages.service';

// @Component({
//   selector: 'app-messages-list',
//   standalone: true,
//   templateUrl: './messages-list.component.html',
//   styleUrl: './messages-list.component.css',
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class MessagesListComponent implements OnInit {
//   private cdRef = inject(ChangeDetectorRef);
//   messageService = inject(MessagesService)
//   destroyRef = inject(DestroyRef)
  
//   messages: string[] = []
  
//   ngOnInit() {
//     const subscription = this.messageService.messages$.subscribe((messages) => {
//       this.messages = messages;
//       this.cdRef.markForCheck();
//     })

//     this.destroyRef.onDestroy(() => subscription.unsubscribe() );
//   }

//   get debugOutput() {
//     console.log('[MessagesList] "debugOutput" binding re-evaluated.');
//     return 'MessagesList Component Debug Output';
//   }
// }
