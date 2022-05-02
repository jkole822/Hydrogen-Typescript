// React
import {FC} from 'react';

// Styles
import {
  HeadlineStyles,
  TableStyles,
  TableRowStyles,
  TableCellStyles,
  TableHeaderStyles,
} from './styles';

export const SizeChart: FC = () => (
  <>
    <h3 className={HeadlineStyles} id="size-chart">
      Size Chart
    </h3>
    <table className={TableStyles}>
      <thead>
        <tr className={TableRowStyles}>
          <th className={TableHeaderStyles}>Board Size</th>
          <th className={TableHeaderStyles}>154</th>
          <th className={TableHeaderStyles}>158</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={TableCellStyles}>Weight Range</td>
          <td className={TableCellStyles}>120-180 lbs. /54-82kg</td>
          <td className={TableCellStyles}>150-200 lbs. /68-91 kg</td>
        </tr>
        <tr>
          <td className={TableCellStyles}>Waist Width</td>
          <td className={TableCellStyles}>246mm</td>
          <td className={TableCellStyles}>255mm</td>
        </tr>
        <tr>
          <td className={TableCellStyles}>Stance Width</td>
          <td className={TableCellStyles}>-40</td>
          <td className={TableCellStyles}>-40</td>
        </tr>
        <tr>
          <td className={TableCellStyles}>Binding Sizes</td>
          <td className={TableCellStyles}>
            Men&rsquo;s S/M, Women&rsquo;s S/M
          </td>
          <td className={TableCellStyles}>Men&rsquo;s L, Women&rsquo;s L</td>
        </tr>
      </tbody>
    </table>
  </>
);
