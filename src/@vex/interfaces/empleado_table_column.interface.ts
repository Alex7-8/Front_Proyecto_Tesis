export interface EmpleadoTableColumn<T> {
  label: string;
  
  property: string;
  type: 'text' | 'image' | 'badge' | 'progress' | 'checkbox' | 'button';
  visible?: boolean;
  icon?: string;
  cssClasses?: string[];


}
