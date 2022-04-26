import { Users } from "./../users";

const EmployeeTable = (props) => {
  const { query } = props;

  return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto sm:-mx-6 text-center">
        <div className="py-2 inline-block sm:px-6 ">
          <div className="overflow-x-auto text-center">
            <table className="glass-container">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium  font-bold text-white px-6 py-4 text-left"
                  >
                    Rank
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  font-bold text-white px-6 py-4 text-left"
                  >
                    Company Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  font-bold text-white px-6 py-4 text-left"
                  >
                    Cuntry
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  font-bold text-white px-6 py-4 text-left"
                  >
                    Sales in Millions
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  font-bold text-white px-6 py-4 text-left"
                  >
                    Profits in Millions
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  font-bold text-white px-6 py-4 text-left"
                  >
                    Asset in Millions
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium  font-bold text-white px-6 py-4 text-left"
                  >
                    market Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Users.filter((user) => {
                  return (
                    user.rank.toString().includes(query) ||
                    user.company_name.toLocaleLowerCase().includes(query)
                  );
                }).map((user) => {
                  return (
                    <tr key={user.id} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium  font-bold text-white">
                        {user.rank}
                      </td>
                      <td className="text-sm  font-bold text-white font-light px-6 py-4 whitespace-nowrap">
                        {user.company_name}
                      </td>
                      <td className="text-sm  font-bold text-white font-light px-6 py-4 whitespace-nowrap">
                        {user.country}
                      </td>
                      <td className="text-sm  font-bold text-white font-light px-6 py-4 whitespace-nowrap">
                        {user.sales}
                      </td>
                      <td className="text-sm  font-bold text-white font-light px-6 py-4 whitespace-nowrap">
                        {user.profits}
                      </td>
                      <td className="text-sm  font-bold text-white font-light px-6 py-4 whitespace-nowrap">
                        {user.assets}
                      </td>
                      <td className="text-sm  font-bold text-white font-light px-6 py-4 whitespace-nowrap">
                        {user.market_value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
