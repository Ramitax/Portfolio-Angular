import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { TabComponent } from './tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { LinkComponent } from './link/link.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SpaceComponent } from './space/space.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatTabsModule, MatExpansionModule, MatCardModule, MatButtonModule, MatIconModule],
  declarations: [LinkComponent, TitleComponent, TabComponent, ListItemComponent, SpaceComponent, CardComponent],
  exports: [LinkComponent, TitleComponent, TabComponent, ListItemComponent, SpaceComponent, CardComponent],
})
export class ComponentsModule {}
