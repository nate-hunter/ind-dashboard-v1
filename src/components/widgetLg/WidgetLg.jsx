import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={`widgetLgBtn ${type}`}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Breakdown by Studio</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Studio</th>
          <th className="widgetLgTh">Seasons</th>
          <th className="widgetLgTh">Episodes</th>
          <th className="widgetLgTh">Pre-Orders</th>
          <th className="widgetLgTh">Finales</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgStudio">
            <span className="widgetLgStudio">A&E</span>
          </td>
          <td className="widgetLgSns">12</td>
          <td className="widgetLgEps">50</td>
          <td className="widgetLgPres">0</td>
          <td className="widgetLgFins">2</td>
          <td className="widgetLgBtn"><Button type="Active" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgStudio">
            <span className="widgetLgStudio">BBC</span>
          </td>
          <td className="widgetLgSns">1</td>
          <td className="widgetLgEps">10</td>
          <td className="widgetLgPres">0</td>
          <td className="widgetLgFins">1</td>
          <td className="widgetLgBtn"><Button type="InActive" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgStudio">
            <span className="widgetLgStudio">CBS</span>
          </td>
          <td className="widgetLgSns">8</td>
          <td className="widgetLgEps">44</td>
          <td className="widgetLgPres">0</td>
          <td className="widgetLgFins">1</td>
          <td className="widgetLgBtn"><Button type="Active" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgStudio">
            <span className="widgetLgStudio">Discovery</span>
          </td>
          <td className="widgetLgSns">17</td>
          <td className="widgetLgEps">60</td>
          <td className="widgetLgPres">0</td>
          <td className="widgetLgFins">4</td>
          <td className="widgetLgBtn"><Button type="Active" /></td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgStudio">
            <span className="widgetLgStudio">Lionsgate</span>
          </td>
          <td className="widgetLgSns">0</td>
          <td className="widgetLgEps">0</td>
          <td className="widgetLgPres">0</td>
          <td className="widgetLgFins">0</td>
          <td className="widgetLgBtn"><Button type="InActive" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgStudio">
            <span className="widgetLgStudio">NBCU</span>
          </td>
          <td className="widgetLgSns">18</td>
          <td className="widgetLgEps">85</td>
          <td className="widgetLgPres">4</td>
          <td className="widgetLgFins">9</td>
          <td className="widgetLgBtn"><Button type="Active" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgStudio">
            <span className="widgetLgStudio">Fox</span>
          </td>
          <td className="widgetLgSns">7</td>
          <td className="widgetLgEps">50</td>
          <td className="widgetLgPres">3</td>
          <td className="widgetLgFins">2</td>
          <td className="widgetLgBtn"><Button type="Active" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgStudio">
            <span className="widgetLgStudio">WB</span>
          </td>
          <td className="widgetLgSns">11</td>
          <td className="widgetLgEps">70</td>
          <td className="widgetLgPres">4</td>
          <td className="widgetLgFins">5</td>
          <td className="widgetLgBtn"><Button type="Active" /></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg;