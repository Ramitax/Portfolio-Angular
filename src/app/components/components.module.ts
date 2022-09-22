import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { TabComponent } from './tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { LinkComponent } from './link/link.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [CommonModule, MatTabsModule, MatExpansionModule],
  declarations: [LinkComponent, TitleComponent, TabComponent, ListItemComponent],
  exports: [LinkComponent, TitleComponent, TabComponent, ListItemComponent],
})
export class ComponentsModule {}