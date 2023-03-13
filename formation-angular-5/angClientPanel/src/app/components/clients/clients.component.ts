import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/models/client';
import { AuthClientService } from 'src/app/services/auth-client.service';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: Client[] = [];
  total: number = 0;
  seartchClient:Client[]=[];
  constructor(
                private clientService: ClientService, 
                private router: Router,
                private flashMessage: FlashMessagesService,
                private authClientService:AuthClientService,
                
                ) {
  }
  ngOnInit(): void {
   this.authClientService.getAuth().subscribe(auth=>{
    this.clientService.getClients(auth?.uid).subscribe(clients => {
      this.seartchClient =this.clients= clients;
      console.log(JSON.stringify(this.clients));
      this.total = this.getTotalBalance();
    });
   })
  }  
   search(query:string){
   // alert(query.toLowerCase() )
    this.seartchClient=(query !='') ?this.clients.filter(client=>client.firstName.toLowerCase().includes(query.toLowerCase()) ||
                                                            client.lastName.toLowerCase().includes(query.toLowerCase()) 
                                                    ):this.clients;

   }

 
  getTotalBalance() {
    return this.clients.reduce((total, client) => {
      let totalBalance = total + (client.balance == undefined ? 0 : client.balance)
      return parseFloat(totalBalance.toString()); //:tmps reale
    }, 0)
  }
  deleteClient(client: Client) {
   
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed && client.id != undefined) {
        
        this.clientService.destroyClient(client.id);
        this.router.navigate(['/']);
        this.flashMessage.show('Client deleted', { cssClass: 'alert-danger', timeout: 4000 });
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })



   // if (confirm("Are you sure to delete this client !!") ) {
      
   // }
  }
}
