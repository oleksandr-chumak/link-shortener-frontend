export interface CheckboxProps {
  initialState?: boolean
  onClick?: (isActive: boolean, handleClick: () => void) => void
  onChange?: (isActive: boolean) => void
  checked?: boolean
}

export interface IsActiveProps {
  $active: boolean;
}