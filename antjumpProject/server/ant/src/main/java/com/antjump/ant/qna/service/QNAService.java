package com.antjump.ant.qna.service;

import com.antjump.ant.common.paging.SelectCriteria;
import com.antjump.ant.qna.dao.QNAMapper;
import com.antjump.ant.qna.dto.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

/**
 * <pre>
 * Class : QNAService
 * Comment:  연결을 열거나 닫고, 비지니스 로직 수행하거나 트랜잭션 제어
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
@Service
public class QNAService {

    private static final Logger log = LoggerFactory.getLogger(QNAService.class);
    private final QNAMapper qnaMapper;

    public QNAService(QNAMapper qnaMapper) {
        this.qnaMapper = qnaMapper;
    }

    public int selectQNATotal() {

        log.info("[QNAService] selectQNATotal Start ===============");
        int result = qnaMapper.selectQNATotal();

        log.info("[QNAService] selectQNATotal End ===============");
        return result;

    }

    public Object selectQNAListWithPaging(SelectCriteria selectCriteria) {

        log.info("[QNAService] selectQNAListWithPaging Start ===============");
        List<QNAListDTO> qnaList = qnaMapper.selectQNAListWithPaging(selectCriteria);

        log.info("[QNAService] selectQNAListWithPaging End ===============");
        return qnaList;
    }

    public QNADetailDTO selectQNA(String qnaId) {
        log.info("[QNAService] selectQNA Start ===============");

        QNADetailDTO qnaDetailDTO = qnaMapper.selectQNA(qnaId);
        log.info("[QNAService] selectQNA End ===============");

        return qnaDetailDTO;

    }

    @Transactional
    public String insertQNA(QNACreateDTO qnaCreateDTO) {

        log.info("[QNAService] insertQNA Start ===============");
        log.info("[QNAService] qnaCreateDTO : " + qnaCreateDTO);

        int result = qnaMapper.insertQNA(qnaCreateDTO);

        return (result > 0) ? "문의 입력 성공" : "문의 입력 실패";

    }

    @Transactional
    public Object updateQNA(QNAModifyDTO qnaModifyDTO) {

        log.info("[QNAService] modifyQNA Start ===============");
        log.info("[QNAService] qnaModifyDTO : " + qnaModifyDTO);

        int result = qnaMapper.updateQNA(qnaModifyDTO);

        return (result > 0 ) ? "문의 수정 성공" : "문의 수정 실패";
    }

    @Transactional
    public Object deleteQNA(String qnaId) {

        log.info("[QNAService] deleteQNA Start ===============");
        int result = qnaMapper.deleteQNA(qnaId);

        log.info("[QNAService] deleteQNA End ===============");

        return (result > 0) ? "문의 삭제 성공" : "문의 삭제 실패";
    }

    @Transactional
    public Object insertAdminQNA(QNAAdminCreateDTO qnaAdminCreateDTO) {

        log.info("[QNAService] insertQNA Start ===============");
        log.info("[QNAService] qnaCreateDTO : " + qnaAdminCreateDTO);

        int result = qnaMapper.insertAdminQNA(qnaAdminCreateDTO);

        return (result > 0) ? "문의 입력 성공" : "문의 입력 실패";

    }

    @Transactional
    public Object updateAdminQNA(QNAAdminModifyDTO qnaAdminModifyDTO) {

        log.info("[QNAService] modifyQNA Start ===============");
        log.info("[QNAService] qnaModifyDTO : " + qnaAdminModifyDTO);

        int result = qnaMapper.updateAdminQNA(qnaAdminModifyDTO);

        return (result > 0 ) ? "문의 수정 성공" : "문의 수정 실패";
    }
}