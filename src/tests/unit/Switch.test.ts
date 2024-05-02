import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Switch from '../../lib/shared/ui/Switch/Switch.svelte';

describe('Switch Component', () => {
  it('should render with initial checked state', () => {
    const { getByRole } = render(Switch, { checked: true });
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('should toggle checked state on click', async () => {
    const { getByRole } = render(Switch, { checked: false });
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    await fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
