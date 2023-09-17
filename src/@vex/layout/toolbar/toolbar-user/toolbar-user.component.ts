import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PopoverService } from '../../../components/popover/popover.service';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'vex-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserComponent implements OnInit {

  dropdownOpen: boolean;
  IdUsuario: string = "";
  foto: string = "";

  constructor(private popover: PopoverService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {

    const token = localStorage.getItem("token"); // Reemplaza 'nombreDelToken' con el nombre real de tu token en el localStorage

    const decodedToken: any = jwt_decode(token);
    const idUsuario = decodedToken.IdUsuario;

    const foto = decodedToken.FotoEmpleado;
    
    this.foto = foto;
    this.IdUsuario= idUsuario;
  }

  showPopover(originRef: HTMLElement) {
    this.dropdownOpen = true;
    this.cd.markForCheck();

    const popoverRef = this.popover.open({
      content: ToolbarUserDropdownComponent,
      origin: originRef,
      offsetY: 12,
      position: [
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });

    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
}
