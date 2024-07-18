aws dynamodb scan \
    --table-name Products \
    --expression-attribute-names '{"#details":"Details","#specs":"Specifications","#ram":"RAM"}' \
    --expression-attribute-values '{":ram_value":{"S":"16GB"}}' \
    --filter-expression "#details.#specs.#ram = :ram_value"

aws dynamodb scan \
    --table-name Products \
    --expression-attribute-names '{"#details":"Details","#specs":"Specifications","#ram":"RAM","#brand":"Brand"}' \
    --expression-attribute-values '{":ram_value":{"S":"16GB"}, ":brand_value":{"S":"BrandA"}}' \
    --filter-expression "#details.#specs.#ram = :ram_value AND #details.#brand = :brand_value"



aws dynamodb scan \
    --table-name flightCatalog \
    --expression-attribute-names '{"#fi":"flightInfo","#oi":"operationalInfo","#aapc":"arrivalAirportCode"}' \
    --expression-attribute-values '{":aapc_value":{"S":"LFI"}}' \
    --filter-expression "#fi.#oi.#aapc = :aapc_value" \
    --output json > sample.json

aws dynamodb scan \
    --table-name flightCatalog \
    --expression-attribute-names '{"#fi":"flightInfo","#oi":"operationalInfo","#aapc":"arrivalAirportCode", "#si":"scheduledInfo","#cc":"carrierCode" }' \
    --expression-attribute-values '{":aapc_value":{"S":"LFI"}, ":cc_value":{"S":"DL"}}' \
    --filter-expression "#fi.#oi.#aapc = :aapc_value AND #fi.#si.#cc = :cc_value" \
    --output json > sample.json


aws dynamodb update-item \
       --table-name "flightCatalog" \
       --key '{"PartitionKeyName": {"S": "DL-8969-2024-07-17-ATL-LFI"}}' \
       --update-expression "SET #P = list_append(#P[?#RC == :roleCode].#U, :new_user)" \
       --condition-expression "NOT contains(#P[?#RC == :roleCode].#U[?#EI == :new_user.#EI], :new_user)" \
       --expression-attribute-names '{
           "#P": "presence",
           "#RC": "roleCode",
           "#U": "users",
           "#EI": "employeeId"
       }' \
       --expression-attribute-values '{
           ":roleCode": {"S": "AC"},
           ":new_user": {
               "M": {
                   "employeeId": {"S": "916737"},
                   "positionCode": {"S": "D2"},
                   "positionName": {"S": "ACSOCC Desk 2"}
               }
           }
       }' \
       --return-values UPDATED_NEW


         --update-expression "SET #P = list_append(#P.#U, :new_user)" \
    --condition-expression "NOT contains(#P.#U[?#EI == :new_user.#EI], :new_user)" \

    aws dynamodb update-item \
       --table-name "flightCatalog" \
       --key '{"PartitionKeyName": {"S": "DL-8969-2024-07-17-ATL-LFI"}}' \
       --update-expression "SET #P = list_append(#P[#RC == :roleCode].#U, :new_user)" \
       --condition-expression "NOT contains(#P[#RC == :roleCode].#U[#EI == :new_user.#EI], :new_user)" \
       --expression-attribute-names '{
           "#P": "presence",
           "#RC": "roleCode",
           "#U": "users",
           "#EI": "employeeId"
       }' \
       --expression-attribute-values '{
           ":roleCode": {"S": "AC"},
           ":new_user": {
               "M": {
                   "employeeId": {"S": "916737"},
                   "positionCode": {"S": "D2"},
                   "positionName": {"S": "ACSOCC Desk 2"}
               }
           }
       }' \
       --return-values UPDATED_NEW

         --update-expression "SET #P = list_append(#P.#U, :new_user)" \
    --condition-expression "NOT contains(#P.#U[?#EI == :new_user.#EI], :new_user)" \