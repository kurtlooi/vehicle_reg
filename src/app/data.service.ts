import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataService {
   getDataFromCsv():any[]  {
return [
  ["05d4caaf-b9cf-4778-9698-b8a6cae85aa6","REGISTERED","14/11/2022","01/01/2032","16:00:00","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Toyota","5-seat","commercial"],
  ["639533fa-532b-4051-a616-15d20a127926","REGISTERED","08/11/2022","01/01/2032","12:00:00","47159c81-f059-4775-a76d-bb531f7ad687","Toyota","5-seat","commercial"],
  ["5582d0de-f2d2-468c-94db-5e52f63f18ad","REGISTERED","25/11/2022","01/01/2032","18:30:00","cb6a901d-2411-4031-8061-bd715cfb86d8","Toyota","5-seat","commercial"],
  ["a610f4fb-d04a-457f-a5a7-7ed278201439","REGISTERED","01/12/2022","01/01/2032","17:30:00","83abb97d-72c7-40c6-a740-6da5b3099344","Toyota","5-seat","commercial"],
  ["6b84e65b-ea40-4372-a173-31d82123dcd0","REGISTERED","01/12/2022","01/01/2032","12:00:00","83abb97d-72c7-40c6-a740-6da5b3099344","Toyota","5-seat","commercial"],
  ["81bde001-15a4-4768-b4a2-6a5b42a88e4a","REGISTERED","21/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Toyota","5-seat","commercial"],
  ["61b7d4b7-89aa-4e81-92ed-7efb8cb16621","REGISTERED","22/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Toyota","5-seat","commercial"],
  ["f19a80ab-2c95-4ce0-bebb-f5f79bd745e1","REGISTERED","03/11/2022","01/01/2032","15:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Toyota","5-seat","commercial"],
  ["fc75b525-6ee9-44c8-8f98-e06093398f9f","REGISTERED","03/11/2022","01/01/2032","16:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Toyota","5-seat","commercial"],
  ["d2e49b59-3527-4544-be6a-5c0fbe3bfec2","REGISTERED","23/11/2022","01/01/2032","12:00:00","9737cf63-bd14-4593-ad25-645855c4fd5b","Toyota","5-seat","commercial"],
  ["866a6fbd-6965-482d-91df-99d3af9e8645","REGISTERED","08/12/2022","01/01/2032","11:30:00","33f2cd49-046d-435b-b75c-40c8ad2802a8","Toyota","5-seat","commercial"],
  ["4636473c-e8d2-4b77-94d2-e3af166399e2","REGISTERED","04/11/2022","01/01/2032","14:30:00","79d227c8-6f64-49c5-8646-da7434b8d87d","Toyota","5-seat","commercial"],
  ["cfaa29f5-5807-4595-8171-6adde368d55d","REGISTERED","09/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","commercial"],
  ["014b4679-e8db-46b4-ae5f-77ca3c44cc2b","REGISTERED","10/11/2022","01/01/2032","17:41:20","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Toyota","5-seat","commercial"],
  ["06098412-d4bc-4643-b097-06fd549dc908","REGISTERED","25/11/2022","01/01/2032","11:00:00","47159c81-f059-4775-a76d-bb531f7ad687","Ford","5-seat","commercial"],
  ["adf788cf-18bf-403d-906b-1b14f44881e3","REGISTERED","12/12/2022","01/01/2032","18:00:00","9737cf63-bd14-4593-ad25-645855c4fd5b","Ford","7-seat","commercial"],
  ["333f58a0-5132-4bb9-9bde-7fe1bdba3643","REGISTERED","16/12/2022","01/01/2032","17:30:00","9737cf63-bd14-4593-ad25-645855c4fd5b","Ford","7-seat","commercial"],
  ["a0339f5f-aff7-4010-9c4e-af183b9d6224","REGISTERED","01/12/2022","01/01/2032","15:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","commercial"],
  ["8df05208-5c45-46ab-a7da-ef0c39c7423d","REGISTERED","09/11/2022","01/01/2032","11:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","commercial"],
  ["1a422655-7786-4797-a348-1095cf67b1b7","REGISTERED","17/11/2022","01/01/2032","16:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","commercial"],
  ["cb0fdbac-4c6f-4786-93d0-78e48c058a3a","REGISTERED","09/11/2022","01/01/2032","16:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","commercial"],
  ["eb367980-15c3-4923-8bce-3ce6c53781a4","REGISTERED","09/11/2022","01/01/2032","18:16:40","7dbc1f90-80cf-468a-bf65-0dc28360aa65","Ford","7-seat","commercial"],
  ["c5566d4a-9d72-43c7-a5ce-1dc039180945","REGISTERED","08/12/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","commercial"],
  ["1e8ec7fd-decc-4769-83ae-fa2fc2731ea7","REGISTERED","09/12/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","commercial"],
  ["40142f7d-de1d-49f0-a67a-dd572e9a8353","REGISTERED","10/11/2022","01/01/2032","10:30:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","commercial"],
  ["759b72d3-f09f-4be5-a4cf-c8db2bfa311f","REGISTERED","10/11/2022","01/01/2032","12:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","commercial"],
  ["ae6d09f6-7efc-4d28-8a07-8fa4cc58e5cf","REGISTERED","24/11/2022","01/01/2032","18:00:00","0999a934-47a8-4a29-bcd1-0d8437238c68","Ford","7-seat","commercial"],
  ["a898ed09-f1d7-4b8e-9e25-3e0a7b008e4b","REGISTERED","13/12/2022","01/01/2032","16:00:00","47159c81-f059-4775-a76d-bb531f7ad687","Ford","7-seat","commercial"],
  ["d35e207f-2172-4a6d-83ea-6158d271a66e","REGISTERED","14/11/2022","01/01/2032","12:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","commercial"],
  ["c5085cde-1bcc-458b-9761-5761d6bf0728","REGISTERED","23/11/2022","01/01/2032","16:00:00","8cf981cb-66d7-4ef8-ba6d-18b7a547d31c","Ford","7-seat","commercial"],
  ["f551890d-8396-4ba6-aab1-f3f08197c48a","REGISTERED","15/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","commercial"],
  ["a1e55511-2662-4ab7-9758-49bb0e8665c5","REGISTERED","17/11/2022","01/01/2032","9:30:00","7dbc1f90-80cf-468a-bf65-0dc28360aa65","Ford","7-seat","commercial"],
  ["28b1a7dc-a593-4c20-b3d8-a5c6f36bb51e","REGISTERED","16/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Ford","7-seat","commercial"],
  ["f4135137-9cf8-4356-85cd-9cdd703b4b0e","REGISTERED","06/12/2022","01/01/2032","10:30:00","4b59a3f1-2355-4867-ab35-ddf9085a59b8","Ford","7-seat","commercial"],
  ["27a3f8bd-4a7f-47d2-9cff-607317ed099f","DEREGISTERED","01/11/2022","01/01/2032","9:00:00","140ee432-d2f1-405a-8547-cc050b1b1a32","Toyota","5-seat","commercial"],
  ["24ed5e3a-5bf9-4d8c-a03c-ab0870067391","DEREGISTERED","01/11/2022","01/01/2032","9:00:00","41723351-a1a0-4805-9422-eb7589f3f97c","Toyota","5-seat","commercial"],
  ["30a896d3-a441-48af-a054-284ec4031d20","DEREGISTERED","01/11/2022","01/01/2032","10:30:00","140ee432-d2f1-405a-8547-cc050b1b1a32","Toyota","5-seat","commercial"],
  ["58660ea5-7e82-4611-9a3f-261737c7a115","DEREGISTERED","17/11/2022","01/01/2032","13:00:00","83abb97d-72c7-40c6-a740-6da5b3099344","Toyota","5-seat","commercial"],
  ["4d9e6bbd-1c7a-45a3-8412-33690f001064","DEREGISTERED","01/11/2022","01/01/2032","11:30:00","534524a2-471e-4589-866f-777d82f20ad0","Toyota","5-seat","commercial"],
  ["e7211eb4-363c-4a92-967a-2731c6e7c974","DEREGISTERED","01/11/2022","01/01/2032","16:30:00","45ad93ec-9bd0-4c5a-a7c8-1c0bf8cab347","Toyota","5-seat","commercial"],
  ["035855bf-391b-49bf-8518-2a95df781611","DEREGISTERED","02/11/2022","01/01/2032","9:00:00","140ee432-d2f1-405a-8547-cc050b1b1a32","Toyota","5-seat","commercial"],
  ["2f26ef8a-1730-4345-91f1-82b69f6f9b26","DEREGISTERED","03/11/2022","01/01/2032","15:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","commercial"],
  ["3e5e9000-fb2e-4e53-9ab5-f9574f87ed95","DEREGISTERED","03/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","commercial"],
  ["02bb5d5a-1d2d-4123-9209-58777e1edd6c","DEREGISTERED","03/11/2022","01/01/2032","18:30:00","4b59a3f1-2355-4867-ab35-ddf9085a59b8","Toyota","5-seat","commercial"],
  ["e21a0287-008e-43b4-9dcd-712ea4373e25","DEREGISTERED","04/11/2022","01/01/2032","12:30:00","705a6537-b8ea-4c4d-be6a-2a2174f2e5b5","Toyota","5-seat","commercial"],
  ["f0242180-665c-4a49-a31b-3c6355fce5a5","DEREGISTERED","23/11/2022","01/01/2032","18:00:00","45ad93ec-9bd0-4c5a-a7c8-1c0bf8cab347","Toyota","5-seat","commercial"],
  ["38ae6e2e-c0b3-4501-b6c6-ebf558b619ac","DEREGISTERED","07/11/2022","01/01/2032","18:30:00","83abb97d-72c7-40c6-a740-6da5b3099344","Toyota","5-seat","commercial"],
  ["04cd35b9-81c0-41f3-9058-f1ae8fbc58b0","DEREGISTERED","08/11/2022","01/01/2032","17:30:00","9737cf63-bd14-4593-ad25-645855c4fd5b","Toyota","5-seat","commercial"],
  ["421a3530-01b9-4bc8-b6fb-3acad936b605","DEREGISTERED","09/11/2022","01/01/2032","12:00:00","47159c81-f059-4775-a76d-bb531f7ad687","Toyota","5-seat","commercial"],
  ["edf92db5-1678-4ddd-ac9d-30292b7c762a","DEREGISTERED","09/11/2022","01/01/2032","16:00:00","47159c81-f059-4775-a76d-bb531f7ad687","Toyota","5-seat","commercial"],
  ["acd526b1-7681-4ee9-9f3f-2497d7d7370d","DEREGISTERED","09/11/2022","01/01/2032","12:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","commercial"],
  ["404403cb-66b9-43bf-ada9-ec1f93b71c07","DEREGISTERED","09/11/2022","01/01/2032","16:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","commercial"],
  ["0af07281-c63a-4df8-ac34-aab6dcdefb88","DEREGISTERED","10/11/2022","01/01/2032","18:30:00","9737cf63-bd14-4593-ad25-645855c4fd5b","Toyota","5-seat","commercial"],
  ["e43bff75-419f-4289-bb29-76e21ef661d9","DEREGISTERED","11/11/2022","01/01/2032","17:30:00","47159c81-f059-4775-a76d-bb531f7ad687","Toyota","5-seat","commercial"],
  ["8635a2ee-5ddc-485a-baed-f1369f2ad50f","DEREGISTERED","17/11/2022","01/01/2032","12:30:00","4b59a3f1-2355-4867-ab35-ddf9085a59b8","Toyota","7-seat","commercial"],
  ["85d740e6-7e29-4357-af95-bda3e4af9d2e","DEREGISTERED","18/11/2022","01/01/2032","12:30:00","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Toyota","7-seat","commercial"],
  ["41e61f0d-6abc-43e8-8a01-2d8ecafe62b8","DEREGISTERED","02/11/2022","01/01/2032","17:00:00","4eafc175-313f-4aab-94a6-5a9f213205b3","Toyota","7-seat","commercial"],
  ["084fd424-ee93-47a1-9834-2d51cb0d19e7","DEREGISTERED","03/11/2022","01/01/2032","14:00:00","83abb97d-72c7-40c6-a740-6da5b3099344","Toyota","7-seat","commercial"],
  ["c09402e4-386b-410e-8d65-5258b002b948","DEREGISTERED","07/11/2022","01/01/2032","16:00:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Honda","7-seat","commercial"],
  ["0f30bb13-f603-40b9-91c7-81e7a4d9d05a","DEREGISTERED","15/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Honda","7-seat","commercial"],
  ["ae1c76f0-a599-411f-be5c-214bde9f388c","DEREGISTERED","17/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Honda","7-seat","commercial"],
  ["bd0c66d9-1936-4434-86df-8d731c74fe10","DEREGISTERED","08/12/2022","01/01/2032","15:30:00","33f2cd49-046d-435b-b75c-40c8ad2802a8","Honda","7-seat","commercial"],
  ["ad947d10-9c70-4c8b-a0bc-8a7fcf1dfb65","DEREGISTERED","04/11/2022","01/01/2032","11:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Honda","7-seat","commercial"],
  ["0dadb8e1-fe5f-44f8-b617-f9aa02d30bf0","DEREGISTERED","04/11/2022","01/01/2032","18:00:00","79d227c8-6f64-49c5-8646-da7434b8d87d","Honda","7-seat","commercial"],
  ["bf8d48af-86cc-46bc-9362-59dd6426ead2","DEREGISTERED","09/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Honda","7-seat","commercial"],
  ["2743c5ad-3dec-4fd8-9449-ba9036e223b5","DEREGISTERED","07/11/2022","01/01/2032","10:30:00","570ad62d-0f93-4bfe-b92b-044903ac3dcb","Honda","7-seat","commercial"],
  ["0e29e7a3-60e3-45df-bf67-a57bddc6a613","DEREGISTERED","07/11/2022","01/01/2032","12:30:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Honda","7-seat","commercial"],
  ["100a577f-886d-48ee-8e62-aad19d741ee0","DEREGISTERED","08/11/2022","01/01/2032","17:30:00","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Honda","7-seat","commercial"],
  ["e0f7c8b2-5508-4299-bb49-ad114884a777","DEREGISTERED","09/11/2022","01/01/2032","12:30:00","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Honda","7-seat","commercial"],
  ["ccbf2dce-164b-4cc6-8f47-e613f7cb59d9","DEREGISTERED","16/11/2022","01/01/2032","12:00:00","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Honda","7-seat","commercial"],
  ["ea0b3fdb-4d86-49e4-8e6f-f7702ec26470","DEREGISTERED","16/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Honda","7-seat","commercial"],
  ["975c8ba5-f4c2-473f-a16c-c647f3b93425","DEREGISTERED","18/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Honda","7-seat","commercial"],
  ["0df06e17-8d2e-4be2-adcb-718547147f2c","DEREGISTERED","07/11/2022","01/01/2032","15:30:00","bd521b34-80cb-43bc-8f36-2c40411a67d5","Honda","7-seat","commercial"],
  ["2767c755-2e98-4c93-b910-9701e83b97bc","DEREGISTERED","09/11/2022","01/01/2032","9:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Honda","7-seat","commercial"],
  ["aff13051-f617-43c6-87d2-17a5555f0f4f","DEREGISTERED","09/11/2022","01/01/2032","12:00:00","6b0d370a-9c98-40c0-b39f-f5cd880c76e9","Honda","7-seat","commercial"],
  ["c1e830a1-2b1d-44dd-96ec-ae929470b2e8","DEREGISTERED","09/11/2022","01/01/2032","17:00:00","6b0d370a-9c98-40c0-b39f-f5cd880c76e9","Honda","7-seat","commercial"],
  ["730a6d8c-3708-4269-9e4b-30d33efe7998","DEREGISTERED","09/11/2022","01/01/2032","10:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Honda","7-seat","commercial"],
  ["35f0638e-3583-4ae9-a943-076407a65ce6","DEREGISTERED","14/11/2022","01/01/2032","18:00:00","84d24c99-a672-4f6c-a13f-cd8a7f4dbda2","Honda","7-seat","commercial"],
  ["acafaba5-c559-438e-ac6d-f62906edf0d5","DEREGISTERED","17/11/2022","01/01/2032","11:00:00","47159c81-f059-4775-a76d-bb531f7ad687","Honda","7-seat","commercial"],
  ["a2cc9741-75dc-4aba-ac80-80e759f3ff0b","DEREGISTERED","17/11/2022","01/01/2032","18:00:00","0999a934-47a8-4a29-bcd1-0d8437238c68","Honda","7-seat","commercial"],
  ["e0cd2f7d-5225-4e63-829b-ffff9df0ba44","DEREGISTERED","11/11/2022","01/01/2032","12:30:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Honda","7-seat","commercial"],
  ["d5b92644-5029-444d-8f05-d22cab063359","DEREGISTERED","11/11/2022","01/01/2032","18:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Honda","7-seat","commercial"],
  ["4e3509f8-b9ca-4c93-994c-3d2824138835","DEREGISTERED","14/11/2022","01/01/2032","11:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Honda","7-seat","commercial"],
  ["37db968d-c484-416d-84f3-549bdca6a8b6","DEREGISTERED","14/11/2022","01/01/2032","12:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Honda","7-seat","commercial"],
  ["853172ba-4b34-4f26-a9f8-1a829d395096","DEREGISTERED","15/11/2022","01/01/2032","17:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Honda","7-seat","commercial"],
  ["19ee0fe0-cee6-4dba-8958-5fee81bedc29","DEREGISTERED","15/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Honda","7-seat","commercial"],
  ["7d94af6d-f989-41b2-b938-d5d7d10a97ab","DEREGISTERED","15/11/2022","01/01/2032","11:30:00","80327d77-43ad-4a7e-9a86-2a7aee8feb3b","Honda","7-seat","commercial"],
  ["d5964fe8-2391-4513-adc1-21a5e7e3162f","DEREGISTERED","15/11/2022","01/01/2032","11:30:00","48f21c17-f403-41b0-b09d-b848fb1f5130","Honda","7-seat","commercial"],
  ["3d6a923e-b35b-4c62-b775-65371654f608","DEREGISTERED","16/11/2022","01/01/2032","12:00:00","7dbc1f90-80cf-468a-bf65-0dc28360aa65","Honda","7-seat","commercial"],
  ["5965e9a0-6091-4ad0-b87a-7d97cd2132da","DEREGISTERED","16/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Honda","7-seat","commercial"],
  ["299ba993-d1fe-4797-a564-84fc7c38c319","DEREGISTERED","16/11/2022","01/01/2032","18:00:00","13d2992c-3a76-49eb-810f-8e182059fc03","Honda","7-seat","commercial"],
  ["d1fd00d9-9cb4-4dc6-95a6-7f5a8fb96395","DEREGISTERED","18/11/2022","01/01/2032","18:00:00","4b59a3f1-2355-4867-ab35-ddf9085a59b8","Honda","7-seat","commercial"],
  ["1b3cf54a-17b4-4940-b245-4079bf19e663","DEREGISTERED","17/11/2022","01/01/2032","16:30:00","705a6537-b8ea-4c4d-be6a-2a2174f2e5b5","Honda","7-seat","commercial"],
  ["d5005304-5bad-4ef4-bb62-d8ef9be24e6d","DEREGISTERED","18/11/2022","01/01/2032","13:00:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Honda","7-seat","commercial"],
  ["0027a43b-2ce0-41ab-8ae5-5ab2b4c4c8e9","DEREGISTERED","19/10/2022","01/01/2032","16:30:00","41723351-a1a0-4805-9422-eb7589f3f97c","Toyota","5-seat","personal"],
  ["916c3053-62ca-444f-a4f6-f84733a1d2e4","DEREGISTERED","19/10/2022","01/01/2032","16:30:00","41723351-a1a0-4805-9422-eb7589f3f97c","Toyota","5-seat","personal"],
  ["39ac8911-35e5-4687-8572-1d8f89cf7981","DEREGISTERED","19/10/2022","01/01/2032","17:00:00","41723351-a1a0-4805-9422-eb7589f3f97c","Toyota","5-seat","personal"],
  ["160f5361-ca72-47d5-a695-0c51c6de015a","DEREGISTERED","19/10/2022","01/01/2032","17:00:00","41723351-a1a0-4805-9422-eb7589f3f97c","Toyota","5-seat","personal"],
  ["fd9fb002-797c-42f8-ace9-3eaa6239016b","DEREGISTERED","19/10/2022","01/01/2032","17:30:00","41723351-a1a0-4805-9422-eb7589f3f97c","Toyota","5-seat","personal"],
  ["a1379435-3db7-462f-9515-2390a095c4e5","DEREGISTERED","19/10/2022","01/01/2032","17:30:00","41723351-a1a0-4805-9422-eb7589f3f97c","Toyota","5-seat","personal"],
  ["d53fa10d-3b86-4b85-8ce0-e1a05446706c","DEREGISTERED","26/10/2022","01/01/2032","14:00:00","41723351-a1a0-4805-9422-eb7589f3f97c","Toyota","5-seat","personal"],
  ["07e5b625-97e8-4302-b33d-8f9d7abfae8b","DEREGISTERED","01/11/2022","01/01/2032","9:00:00","744ae140-06fe-4258-8b1f-cfa954feee82","Toyota","5-seat","personal"],
  ["df67feb5-87b5-40be-a670-edb15c8fe7a6","DEREGISTERED","01/11/2022","01/01/2032","14:00:00","8f67a0db-d16d-4fed-b47a-d3ba71895518","Toyota","5-seat","personal"],
  ["4246ed4b-72d9-4f5a-a890-a1d769dbcefc","DEREGISTERED","01/11/2022","01/01/2032","9:30:00","23fa793a-459b-46ad-8860-a3361748aa91","Toyota","5-seat","personal"],
  ["4796122f-ec8c-47b0-bdfa-bec36aa10aef","DEREGISTERED","01/11/2022","01/01/2032","10:30:00","41754344-786d-4a37-a6fa-392cb4f8aa13","Toyota","5-seat","personal"],
  ["2ebbed45-0747-49a3-89f5-d510327ced89","DEREGISTERED","01/11/2022","01/01/2032","10:00:00","5825120a-310f-4614-98c8-a354068f0353","Toyota","5-seat","personal"],
  ["9f1bb9d3-cc22-4688-b85d-e948d804e7f0","DEREGISTERED","01/11/2022","01/01/2032","10:30:00","30571978-4e2b-42ae-a5d0-a5a9801fd563","Toyota","5-seat","personal"],
  ["d3c78891-3f62-43be-b546-ab592efc38bb","DEREGISTERED","01/11/2022","01/01/2032","12:30:00","744ae140-06fe-4258-8b1f-cfa954feee82","Toyota","5-seat","personal"],
  ["366d5d31-dd7a-4488-b11d-ad4df8fec8bc","DEREGISTERED","01/11/2022","01/01/2032","12:30:00","30571978-4e2b-42ae-a5d0-a5a9801fd563","Toyota","5-seat","personal"],
  ["d92766db-4f68-43c5-abea-86fc5effe782","DEREGISTERED","01/11/2022","01/01/2032","16:30:00","e7f9a9c8-ac87-402a-8b01-eefa99f0920f","Toyota","5-seat","personal"],
  ["591b4b8d-cb59-49ab-a8c5-bb97902566a3","DEREGISTERED","03/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","personal"],
  ["626e8f9b-c185-472a-a15f-3bbf1d94bc9f","DEREGISTERED","03/11/2022","01/01/2032","15:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","personal"],
  ["362613cd-137c-46a9-bbee-a2b22a452c90","DEREGISTERED","03/11/2022","01/01/2032","15:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","personal"],
  ["a93bcade-b52d-42a5-9e8b-90d08bdc8bc4","DEREGISTERED","02/11/2022","01/01/2032","9:00:00","744ae140-06fe-4258-8b1f-cfa954feee82","Toyota","5-seat","personal"],
  ["f845562d-5c10-4f7e-87c3-d5c8a396ab20","DEREGISTERED","02/11/2022","01/01/2032","11:30:00","45ad93ec-9bd0-4c5a-a7c8-1c0bf8cab347","Toyota","5-seat","personal"],
  ["b784465b-d0da-41e2-8729-48e00d616804","DEREGISTERED","02/11/2022","01/01/2032","11:00:00","45ad93ec-9bd0-4c5a-a7c8-1c0bf8cab347","Toyota","5-seat","personal"],
  ["126beb16-31d4-425b-b926-204a9c6dd4e1","DEREGISTERED","02/11/2022","01/01/2032","13:00:00","45ad93ec-9bd0-4c5a-a7c8-1c0bf8cab347","Toyota","7-seat","personal"],
  ["4a5f0a59-fddb-4c92-b237-46b76c6cb506","DEREGISTERED","02/11/2022","01/01/2032","15:30:00","705a6537-b8ea-4c4d-be6a-2a2174f2e5b5","Toyota","7-seat","personal"],
  ["d8c3145c-b7f5-47c4-b70c-d4808c72ab68","DEREGISTERED","04/11/2022","01/01/2032","11:30:00","e0e6ce7f-8988-4783-b0b7-024acd129db4","Toyota","7-seat","personal"],
  ["28138539-706a-4ad2-a3e0-4d6b2ecf787e","DEREGISTERED","08/11/2022","01/01/2032","10:30:00","3cbee0f0-8fda-4980-a564-48dcfa89b92c","Toyota","7-seat","personal"],
  ["c5ab1c93-187d-4f2f-bd1c-dde204474c9e","DEREGISTERED","08/11/2022","01/01/2032","15:30:00","705a6537-b8ea-4c4d-be6a-2a2174f2e5b5","Toyota","7-seat","personal"],
  ["4e8dcb80-839b-4fc9-aeb0-acdd9cc38dc6","DEREGISTERED","16/11/2022","01/01/2032","13:30:00","32f9a33e-346c-412b-992f-e4e3ad8ee8e3","Toyota","7-seat","personal"],
  ["a569d7e4-e3aa-4e2e-ab5f-cf5d03980d9a","DEREGISTERED","03/11/2022","01/01/2032","14:00:00","b08ec1d9-94f2-48b6-b929-b321c242738b","Toyota","7-seat","personal"],
  ["b867da38-351a-4e14-aafe-5efc06e99287","DEREGISTERED","02/11/2022","01/01/2032","16:30:00","800ebc95-7065-42ec-a473-75143acf6806","Toyota","7-seat","personal"],
  ["a0b8db3c-4b38-47bc-b85e-20e9a958ff31","DEREGISTERED","02/11/2022","01/01/2032","17:30:00","a6644e3f-39b9-47ef-b8f7-d50b7ed4d1a9","Toyota","7-seat","personal"],
  ["26fd95d3-2977-4d1e-94fc-f544ab2451ee","DEREGISTERED","02/11/2022","01/01/2032","16:00:00","579b42bc-a92d-4b36-af7b-b1fbfc6ae078","Toyota","7-seat","personal"],
  ["f8f755f1-4c43-4950-89c7-86539259dd24","DEREGISTERED","03/11/2022","01/01/2032","12:30:00","800ebc95-7065-42ec-a473-75143acf6806","Toyota","7-seat","personal"],
  ["df229b25-f6c0-450c-972f-a3653322a4eb","DEREGISTERED","03/11/2022","01/01/2032","16:00:00","60c8d3f5-880c-4a29-b1ab-c3d46d8ce9a1","Toyota","7-seat","personal"],
  ["5af3af68-c016-49ca-be1f-557b9973ff7f","DEREGISTERED","03/11/2022","01/01/2032","16:30:00","60c8d3f5-880c-4a29-b1ab-c3d46d8ce9a1","Toyota","7-seat","personal"],
  ["cc17dda9-b04e-4aa8-9389-f7a00adeb9d3","DEREGISTERED","04/11/2022","01/01/2032","17:30:00","3cbee0f0-8fda-4980-a564-48dcfa89b92c","Toyota","7-seat","personal"],
  ["15925480-1751-4014-9897-e49ea93cf971","DEREGISTERED","07/11/2022","01/01/2032","12:30:00","45561c91-b238-4f2d-a433-649aec17ffb9","Toyota","7-seat","personal"],
  ["eb9e812c-e235-4aab-a574-8e24d1dde48c","DEREGISTERED","07/11/2022","01/01/2032","12:00:00","bd521b34-80cb-43bc-8f36-2c40411a67d5","Toyota","7-seat","personal"],
  ["ed9984ce-7525-4b3a-ac42-1708b261ff4b","DEREGISTERED","07/11/2022","01/01/2032","14:30:00","7a605d72-77ae-4f28-9819-b17f9edfd5ee","Toyota","7-seat","personal"],
  ["fd4ba2bb-5916-440d-8d0d-0aa5db0637b2","DEREGISTERED","07/11/2022","01/01/2032","16:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Toyota","7-seat","personal"],
  ["9e73bcf9-79e3-4fc0-825a-324590c5ef69","DEREGISTERED","07/11/2022","01/01/2032","17:30:00","79d227c8-6f64-49c5-8646-da7434b8d87d","Toyota","7-seat","personal"],
  ["04e4947c-4a83-4de4-8517-8c44aa767260","DEREGISTERED","07/11/2022","01/01/2032","17:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Toyota","7-seat","personal"],
  ["9f1bce5e-421e-431d-bade-c6498a86c339","DEREGISTERED","16/01/2023","01/01/2032","17:00:00","dd2e99db-0484-4ece-84f7-72a235bb0ce5","Toyota","7-seat","personal"],
  ["be0b5e72-01d5-4d6a-9734-19860228f85f","DEREGISTERED","09/11/2022","01/01/2032","12:30:00","705a6537-b8ea-4c4d-be6a-2a2174f2e5b5","Ford","7-seat","personal"],
  ["8ba82fc4-a493-4cb4-ab59-68322f9ae8f8","DEREGISTERED","09/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Ford","7-seat","personal"],
  ["14e28ddd-2650-4e8d-93fd-c2e97343ac95","DEREGISTERED","09/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["099d58c3-e7ec-44d4-9b15-8221c699e6b9","DEREGISTERED","10/11/2022","01/01/2032","16:00:00","96d9242e-13a6-4f82-ad53-62964a07c90f","Ford","7-seat","personal"],
  ["3306e0de-0ea1-46b2-95e2-8b20c175af5c","DEREGISTERED","10/11/2022","01/01/2032","17:00:00","96d9242e-13a6-4f82-ad53-62964a07c90f","Ford","7-seat","personal"],
  ["96702cfa-37ca-44e0-a364-75968d29e9bb","DEREGISTERED","11/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Ford","7-seat","personal"],
  ["97d3400d-87bc-4d13-81a8-81fe744d563e","DEREGISTERED","14/11/2022","01/01/2032","16:30:00","4d492cc7-d38b-4efa-aa85-c19a06a69e1b","Ford","7-seat","personal"],
  ["abb450cc-0c1b-4231-8187-10d586381fb7","DEREGISTERED","17/11/2022","01/01/2032","14:30:00","b9a90eea-b175-42df-969a-078be63283b7","Ford","7-seat","personal"],
  ["06709895-dd2f-45eb-9756-7f2c1f15ad28","DEREGISTERED","08/11/2022","01/01/2032","18:00:00","c141467e-2e36-4946-9c57-aaadccc8eac3","Ford","7-seat","personal"],
  ["3068e9f4-c843-41b5-86d3-c4ffdf994fd8","DEREGISTERED","17/11/2022","01/01/2032","16:30:00","1627ab28-63d0-4f92-8f39-82fb13cf2052","Ford","7-seat","personal"],
  ["18dc5797-871f-4aad-b746-bcbd3b44fe8f","DEREGISTERED","08/11/2022","01/01/2032","18:00:00","5825120a-310f-4614-98c8-a354068f0353","Ford","7-seat","personal"],
  ["7280e32a-b5e3-4b8d-8104-e70638b891bb","DEREGISTERED","09/11/2022","01/01/2032","12:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["336c51d6-9b8b-4704-92b0-ba10213cbaa9","DEREGISTERED","09/11/2022","01/01/2032","12:30:00","0236ab77-0bb3-4118-9f69-16b82dcf5964","Ford","7-seat","personal"],
  ["35be56ea-a8c7-4b37-9667-b84a0954ec6a","DEREGISTERED","09/11/2022","01/01/2032","16:00:00","e130041f-f09a-4605-8330-6d4ae9ee0d44","Ford","7-seat","personal"],
  ["b5444efd-1e79-4150-b15c-46e4b17e7f3d","DEREGISTERED","09/11/2022","01/01/2032","16:00:00","c141467e-2e36-4946-9c57-aaadccc8eac3","Ford","7-seat","personal"],
  ["3b5c520b-f36e-4c9d-a415-1934a598cb31","DEREGISTERED","09/11/2022","01/01/2032","14:30:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["7b0b67d0-dc64-4081-8221-d151895c2263","DEREGISTERED","17/11/2022","01/01/2032","16:00:00","4989e98e-e3a6-428b-bb87-b7371e733f21","Ford","7-seat","personal"],
  ["240cdf01-62c0-4ffa-8c37-492efd8ab7f0","DEREGISTERED","09/11/2022","01/01/2032","16:30:00","99b8814e-0218-4e13-b0ab-b29fc74ef872","Ford","7-seat","personal"],
  ["020f678a-7a93-458e-96f8-c518168b9e81","DEREGISTERED","11/11/2022","01/01/2032","12:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["9771321a-50fb-462c-adbe-c99ac996a572","DEREGISTERED","10/11/2022","01/01/2032","12:30:00","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Ford","7-seat","personal"],
  ["a1fc8454-da69-4402-8858-55faed0f583a","DEREGISTERED","10/11/2022","01/01/2032","17:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["2e358e09-3a71-49d2-af30-57a3c866b7f9","DEREGISTERED","10/11/2022","01/01/2032","15:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["b993f30a-97a0-45a8-88a5-11fa258d920c","DEREGISTERED","10/11/2022","01/01/2032","16:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["26d02345-d863-4606-af7b-12b820e5b848","DEREGISTERED","10/11/2022","01/01/2032","18:00:00","3c39458b-caa3-481c-83a4-b900d9ec39ba","Ford","7-seat","personal"],
  ["ebac6eb1-44e7-4c4f-aecc-e59a331d236e","DEREGISTERED","10/11/2022","01/01/2032","17:00:00","ad8b4165-ad94-45ab-bba5-d85b7060edad","Ford","7-seat","personal"],
  ["7f77df54-0f62-4628-97b4-b6abcfbc04ed","DEREGISTERED","10/11/2022","01/01/2032","17:00:00","86b3da58-acbf-4eaa-84be-bb671a91ddf7","Ford","7-seat","personal"],
  ["35462d22-ce16-4d77-803c-5fa34aa76eb3","DEREGISTERED","11/11/2022","01/01/2032","12:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["9f04ee6d-218d-4a69-9a17-3cf099970649","DEREGISTERED","11/11/2022","01/01/2032","17:30:00","811c4d7e-7b7c-4b0d-bbf3-8932a4d96b17","Ford","7-seat","personal"],
  ["0f796b2e-a028-402c-aea2-6d280977f292","DEREGISTERED","14/11/2022","01/01/2032","12:00:00","bd521b34-80cb-43bc-8f36-2c40411a67d5","Ford","7-seat","personal"],
  ["094a3888-ac7c-410c-8a3d-e23e95246c45","DEREGISTERED","16/11/2022","01/01/2032","12:30:00","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Ford","7-seat","personal"],
  ["b6bbdb0c-030c-47e7-859b-3060cf149d66","DEREGISTERED","16/11/2022","01/01/2032","16:00:00","33f2cd49-046d-435b-b75c-40c8ad2802a8","Ford","7-seat","personal"],
  ["5a57a1d8-e19d-488c-bc88-02dbcac950fa","DEREGISTERED","16/11/2022","01/01/2032","18:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["4da048d0-566c-4869-b534-476ac6190f32","DEREGISTERED","17/11/2022","01/01/2032","17:00:00","dd50b83f-b6e4-4d16-9e16-e92dbbef91b9","Ford","7-seat","personal"],
  ["f52d939f-bb99-42ab-8330-2dfbce138a41","DEREGISTERED","29/11/2022","01/01/2032","17:30:00","23c146b7-8c48-4f08-a97c-0459482855ee","Ford","7-seat","personal"],
  ["20c4c867-316c-42ee-9edc-a77f0c18d522","DEREGISTERED","14/11/2022","01/01/2032","16:00:00","f03fca67-a29a-48eb-9fae-f0bb767ccdae","Ford","7-seat","personal"],
  ["b2726599-ace8-4362-89db-d0f4852e6c8f","DEREGISTERED","14/11/2022","01/01/2032","18:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["81ba7def-d6c9-4408-8e06-9e04178af660","DEREGISTERED","15/11/2022","01/01/2032","16:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["f4aea9e8-9890-4ac5-af6b-a7efc4b707f6","DEREGISTERED","16/11/2022","01/01/2032","12:30:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["4875ae33-c250-4339-a384-c96690847073","DEREGISTERED","16/11/2022","01/01/2032","12:00:00","a9452fc8-305a-4b5b-aa40-8186782bfb15","Ford","7-seat","personal"],
  ["716f10c6-bb98-4a8d-93a1-08c10f81ea68","DEREGISTERED","16/11/2022","01/01/2032","12:00:00","0236ab77-0bb3-4118-9f69-16b82dcf5964","Ford","7-seat","personal"],
  ["97c3caf9-c1ed-4b97-9ed1-1723a532a339","DEREGISTERED","16/11/2022","01/01/2032","14:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["3a019017-39db-47df-9ea4-fac81a78b517","DEREGISTERED","16/11/2022","01/01/2032","15:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["cacdaca9-b5df-4a2d-954f-202087e71a01","DEREGISTERED","16/11/2022","01/01/2032","17:30:00","4c9c1d95-2a5b-431e-a5c0-20e414f90b43","Ford","7-seat","personal"],
  ["f8bccf66-9034-4199-b460-4c42a6ce0acb","DEREGISTERED","16/11/2022","01/01/2032","16:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["aaf74bd7-f32f-4cb0-a58c-2c31eafb2320","DEREGISTERED","16/11/2022","01/01/2032","18:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Ford","7-seat","personal"],
  ["86688389-1096-4dc3-a075-98e2f4d0a204","DEREGISTERED","16/11/2022","01/01/2032","18:00:00","f5b69a89-ff09-43df-b1a3-61954e010bce","Ford","7-seat","personal"],
  ["18e19e2b-124a-47e5-bb8c-763e12ffc32a","DEREGISTERED","17/11/2022","01/01/2032","18:00:00","9737cf63-bd14-4593-ad25-645855c4fd5b","Ford","7-seat","personal"],
  ["100c49e8-c0e3-45d0-a4c1-56e6d841dda0","DEREGISTERED","17/11/2022","01/01/2032","14:30:00","80327d77-43ad-4a7e-9a86-2a7aee8feb3b","Ford","7-seat","personal"],
  ["db69f28c-4646-498b-a77a-01ae6b64185a","DEREGISTERED","17/11/2022","01/01/2032","15:30:00","80327d77-43ad-4a7e-9a86-2a7aee8feb3b","Ford","7-seat","personal"],
  ["b2083d97-8fc1-4ec6-9627-6fa0233bc19e","DEREGISTERED","17/11/2022","01/01/2032","17:30:00","8cf981cb-66d7-4ef8-ba6d-18b7a547d31c","Ford","7-seat","personal"],
  ["744af7f5-f442-4b0b-9dac-0c45e19cb9ac","DEREGISTERED","17/11/2022","01/01/2032","18:30:00","80327d77-43ad-4a7e-9a86-2a7aee8feb3b","Ford","7-seat","personal"],
  ["c326b25c-ca3c-423f-8d14-a941172dfdb0","DEREGISTERED","18/11/2022","01/01/2032","12:00:00","80327d77-43ad-4a7e-9a86-2a7aee8feb3b","Ford","7-seat","personal"],
  ["cb998e4a-4bba-4f65-a87a-2217e9338e64","DEREGISTERED","17/11/2022","01/01/2032","17:00:00","af2eeb42-34ce-43a4-a88d-d57d9319b642","Ford","7-seat","personal"],
  ["ad401ae3-d9b4-4f41-920a-2a71af284923","DEREGISTERED","17/11/2022","01/01/2032","18:00:00","af2eeb42-34ce-43a4-a88d-d57d9319b642","Ford","7-seat","personal"],
  ["871aa0db-d2bd-4875-ae64-a106016b266c","DEREGISTERED","18/11/2022","01/01/2032","17:00:00","b7797876-0aa7-424c-81ad-b102e16c9a56","Ford","7-seat","personal"],
  ["e44aac85-db90-4a69-af25-dd965e13d97b","REGISTERED","01/11/2022","01/01/2032","12:30:00","e7f9a9c8-ac87-402a-8b01-eefa99f0920f","Toyota","5-seat","personal"],
  ["26caa27a-f878-4cf2-a54d-1866b7a625e5","REGISTERED","01/11/2022","01/01/2032","18:00:00","e7f9a9c8-ac87-402a-8b01-eefa99f0920f","Toyota","5-seat","personal"],
  ["3a9f8fc0-5446-48a1-9b36-a0bd16d6eb98","REGISTERED","02/11/2022","01/01/2032","15:00:00","705a6537-b8ea-4c4d-be6a-2a2174f2e5b5","Toyota","5-seat","personal"],
  ["d064eca2-a41a-4ff2-ae82-bd2ed0e64056","REGISTERED","03/11/2022","01/01/2032","17:30:00","e00f6bed-1b9f-4efe-bbc0-6581382c028c","Toyota","5-seat","personal"],
  ["e918dd5c-9e52-461a-a095-04e627089f21","REGISTERED","04/11/2022","01/01/2032","10:00:00","4eafc175-313f-4aab-94a6-5a9f213205b3","Toyota","5-seat","personal"],
  ["f012cf38-6adf-4b8f-bdbf-8511d6124460","REGISTERED","04/11/2022","01/01/2032","12:30:00","10746c26-a6b9-49bf-936f-f8105ccb8395","Toyota","5-seat","personal"],
  ["4591fbce-d5fe-4f1b-9940-e2781296e156","REGISTERED","07/11/2022","01/01/2032","12:30:00","4989e98e-e3a6-428b-bb87-b7371e733f21","Toyota","5-seat","personal"],
  ["9e04b939-5239-485e-a7e9-f79ee0eb588b","REGISTERED","07/11/2022","01/01/2032","20:24:34","3cf239c3-dd70-4bf8-b35e-f5508b64bef8","Toyota","5-seat","personal"],
  ["c88e5399-a34e-4135-b5b3-8cf660338a7b","REGISTERED","08/11/2022","01/01/2032","16:30:00","5825120a-310f-4614-98c8-a354068f0353","Toyota","5-seat","personal"],
  ["04daf337-60ce-4eff-a838-c73e8371fad4","REGISTERED","08/11/2022","01/01/2032","18:30:00","5825120a-310f-4614-98c8-a354068f0353","Toyota","5-seat","personal"],
  ["e875fdf7-4108-4edc-9324-5222390abd24","REGISTERED","09/11/2022","01/01/2032","12:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","personal"],
  ["0874bac4-fbca-42a9-8cdf-c20aeaa5339a","REGISTERED","09/11/2022","01/01/2032","12:00:00","0236ab77-0bb3-4118-9f69-16b82dcf5964","Toyota","5-seat","personal"],
  ["c7163a22-32e0-4517-8086-a088a3bab7f5","REGISTERED","09/11/2022","01/01/2032","12:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Toyota","5-seat","personal"],
  ["0651de5e-2333-4500-a4fc-38937d378244","REGISTERED","10/11/2022","01/01/2032","12:30:00","8cf981cb-66d7-4ef8-ba6d-18b7a547d31c","Toyota","5-seat","personal"],
  ["0b75e15e-3ea5-4560-96c1-db71a9aec3de","REGISTERED","15/11/2022","01/01/2032","17:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Toyota","5-seat","personal"],
  ["8cfb11d1-af20-4b4c-ad43-59c4a6bf0bf5","REGISTERED","22/11/2022","01/01/2032","17:00:00","96d9242e-13a6-4f82-ad53-62964a07c90f","Toyota","5-seat","personal"],
  ["c7b6b812-d8f2-4eb4-8ed9-646ec7032428","REGISTERED","11/11/2022","01/01/2032","12:30:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Toyota","5-seat","personal"],
  ["a713d413-5c60-4e75-a8ec-30b902f8ec92","REGISTERED","11/11/2022","01/01/2032","17:30:00","4eafc175-313f-4aab-94a6-5a9f213205b3","Toyota","5-seat","personal"],
  ["3305e573-8623-4fe0-85a5-42f635ba1220","REGISTERED","14/11/2022","01/01/2032","12:00:00","4eafc175-313f-4aab-94a6-5a9f213205b3","Toyota","5-seat","personal"],
  ["5f6b1cb8-331a-4ed7-8f26-de10a1c4d83d","REGISTERED","23/11/2022","01/01/2032","11:30:00","bd521b34-80cb-43bc-8f36-2c40411a67d5","Toyota","5-seat","personal"],
  ["4bb6f152-e2be-43e7-b1e6-cd2b2579541e","REGISTERED","14/11/2022","01/01/2032","22:58:18","e15516a9-feef-48e7-9d9d-f3ad24dc2095","Toyota","5-seat","personal"],
  ["84f8da9d-ed25-4e50-9d17-719eac41886b","REGISTERED","15/11/2022","01/01/2032","11:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Toyota","5-seat","personal"],
  ["74c9e127-95c9-4ef9-b4ac-d7c0bcf3cb5d","REGISTERED","17/11/2022","01/01/2032","12:30:00","75e74cd5-cc8e-4f04-a9c4-1543b79dc7d3","Toyota","5-seat","personal"],
  ["fa16a7d2-0f7d-48a6-b997-1c813afd1170","REGISTERED","15/11/2022","01/01/2032","15:00:00","f03fca67-a29a-48eb-9fae-f0bb767ccdae","Toyota","5-seat","personal"],
  ["9af6dfd1-f45e-4482-b7a1-1a3aee2a5bcb","REGISTERED","15/11/2022","01/01/2032","16:00:00","af6dd0e1-0af3-4b5e-b183-d5d98ca9d224","Toyota","5-seat","personal"],
  ["db408db9-750d-474a-a646-dc4629fa3a35","REGISTERED","15/11/2022","01/01/2032","18:00:00","0a6af742-d6d9-492a-9f2d-9088c3b3e468","Toyota","7-seat","personal"],
  ["969f8d0e-f6f3-4adc-bfeb-1284b0211c95","REGISTERED","29/11/2022","01/01/2032","11:30:00","e1559337-1349-41a4-810f-65347f57eb8b","Toyota","7-seat","personal"],
  ["235afe41-1f9d-48bb-9629-507f8064306b","REGISTERED","21/11/2022","01/01/2032","15:00:00","391e8292-adf0-41ba-b237-787207abb42d","Ford","7-seat","personal"],
  ["f34c641d-9d87-4ade-9b40-9dd46025b530","REGISTERED","16/11/2022","01/01/2032","17:00:00","0236ab77-0bb3-4118-9f69-16b82dcf5964","Ford","7-seat","personal"],
  ["e69a9a80-d4fb-4ac3-ac57-74224f5b2d09","REGISTERED","16/11/2022","01/01/2032","17:30:00","4c9c1d95-2a5b-431e-a5c0-20e414f90b43","Ford","7-seat","personal"],
  ["4164ac1c-02ff-4c97-a264-6bb5b5a6fe9a","REGISTERED","16/11/2022","01/01/2032","18:00:00","1b92de8b-2d01-4e12-bc2b-ae657b752428","Ford","7-seat","personal"],
  ["6853a80b-ffea-419f-adde-dc746916ece0","REGISTERED","14/12/2022","01/01/2032","16:00:00","ea947367-4a97-48ae-87f1-a40a5862eb77","Ford","7-seat","personal"],
  ["318c6b44-6b00-4f0e-b2a2-c7e4b3c7d3a7","REGISTERED","22/11/2022","01/01/2032","12:30:00","fde721a9-744c-4584-880b-b6e874931b86","Ford","7-seat","personal"],
  ["6c31c3cc-da0b-4a27-9f04-9b4566e18ef8","REGISTERED","23/11/2022","01/01/2032","16:00:00","ac35df24-6e5d-4276-a4b4-0cc7c412fa81","Ford","7-seat","personal"],
  ["50338906-0073-498d-9787-c88fa8182510","REGISTERED","22/11/2022","01/01/2032","12:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["020547e4-0fad-4e6a-8c5c-678eb5d5b701","REGISTERED","23/11/2022","01/01/2032","16:30:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["d30db0e5-a36c-4ada-be98-850257356cc7","REGISTERED","25/11/2022","01/01/2032","12:00:00","90968d1a-d609-46bb-a60a-2db0486990d6","Ford","7-seat","personal"],
  ["5b52440f-8aa0-49de-bb92-ce09c975a8d1","REGISTERED","30/11/2022","01/01/2032","10:00:00","39d36fa9-539b-48c7-9ff5-71bd46e600b6","Ford","7-seat","personal"],
  ["5cda0885-7172-4248-9cf4-79a828c1c4db","REGISTERED","30/11/2022","01/01/2032","15:30:00","39d36fa9-539b-48c7-9ff5-71bd46e600b6","Ford","7-seat","personal"],
  ["8b458aa5-04cd-4272-9f42-1a1ad91d854c","REGISTERED","07/12/2022","01/01/2032","10:30:00","39d36fa9-539b-48c7-9ff5-71bd46e600b6","Ford","7-seat","personal"],
  ["35f97d72-9fb6-418a-a9d8-64a33ff55291","REGISTERED","22/11/2022","01/01/2032","18:00:00","12602439-8716-47ba-b565-f72f77a430e3","Ford","7-seat","personal"],
  ["e161719e-2e5c-4c39-b308-7bbe36c845cb","REGISTERED","07/12/2022","01/01/2032","15:30:00","39d36fa9-539b-48c7-9ff5-71bd46e600b6","Ford","7-seat","personal"]]
  

  }
}

