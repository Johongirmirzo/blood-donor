import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteSubscriber } from "../../../redux/subscriber";
import { deleteSubscriber as removeSubscriber } from "../../../api/subscriber";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "../../../styles/UI/Table/index.styled";
import {
  SubscribersTableDeleteBtn,
  SubscribersTableTitle,
} from "./index.styled";
import { SubscribersTableProps } from "./index.types";

const SubscribersTable = ({ paginatedSubscribers }: SubscribersTableProps) => {
  const dispatch = useDispatch();

  const handleDeleteSubscriberClick = async (subscriberId: string) => {
    try {
      await removeSubscriber(subscriberId);
      dispatch(deleteSubscriber({ subscriberId }));
    } catch (err) {
      console.error(err);
    }
  };

  return paginatedSubscribers.length > 0 ? (
    <Table>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Subscriber Email</Th>
          <Th>Subscription Date</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {paginatedSubscribers.map((subscriber, index) => (
          <Tr key={subscriber._id}>
            <Td>{index + 1}</Td>
            <Td>{subscriber.subscriberEmail}</Td>
            <Td>
              {moment(subscriber.subscriptionDate).format(
                "yy-MM-DD hh:mm:ss a"
              )}
            </Td>
            <Td>
              <SubscribersTableDeleteBtn
                onClick={handleDeleteSubscriberClick.bind(null, subscriber._id)}
              >
                <RiDeleteBinLine />
              </SubscribersTableDeleteBtn>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  ) : (
    <SubscribersTableTitle>
      There are not any subscribers yet!
    </SubscribersTableTitle>
  );
};

export default SubscribersTable;
