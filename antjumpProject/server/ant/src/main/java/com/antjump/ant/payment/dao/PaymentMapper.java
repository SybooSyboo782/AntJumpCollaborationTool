package com.antjump.ant.payment.dao;

import com.antjump.ant.payment.dto.PaymentCreateDTO;
import com.antjump.ant.payment.dto.PaymentDetailDTO;
import com.antjump.ant.payment.dto.PaymentListDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : PaymentMapper
 * Comment: 인터페이스로 컴파일 시에 PaymentMapper.xml과 합쳐져 동작한다.
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-03       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
@Mapper
public interface PaymentMapper {
    PaymentDetailDTO selectPaymentsDetail(String paymentId);

    List<PaymentListDTO> selectPaymentsList();

    String selectPriceByOrderId(String orderId);

    int createPayment(PaymentCreateDTO paymentCreateDTO);

    int createOrder(PaymentCreateDTO paymentCreateDTO);

    int insertPaymentHistories(PaymentCreateDTO paymentCreateDTO);

    int insertGoodsPossessions(PaymentCreateDTO paymentCreateDTO);
}
